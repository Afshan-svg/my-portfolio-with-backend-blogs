import express from "express";
import cors from "cors"; // Add this import
import blogRoutes from "./blogRoutes.js";
import bodyParser from "body-parser";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
import { embedText, retrieveRelevantChunks } from "./retrieve.js";
import { constructMessages } from "./prompt.js";

const app = express();
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'http://localhost:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use("/api", blogRoutes);
app.use(bodyParser.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });
const CHAT_MODEL = "gpt-4o-mini";

// Minimal in-memory session store (replace with Redis for prod)
const sessions = new Map();

/**
 * POST /chat
 * body: { sessionId, message, k }
 * returns: { answer, sources: [{title, metadata}], usedChunks: [...] }
 *
 * This is a non-streaming variant (simpler). For streaming see /chat/stream below.
 */
app.post("/chat", async (req, res) => {
  try {
    const { sessionId = "anon", message, k = 5 } = req.body;
    if (!message) return res.status(400).json({ error: "message required" });

    // 1) short history from session
    const history = sessions.get(sessionId) || [];

    // 2) embed user message
    const qEmb = await embedText(message);

    // 3) retrieve top-k chunks
    const chunks = await retrieveRelevantChunks(qEmb, k);

    // 4) build messages
    const messages = constructMessages(chunks, history, message, "Afshan");

    // 5) call OpenAI (non-stream)
    const resp = await openai.chat.completions.create({
      model: CHAT_MODEL,
      messages,
      max_tokens: 150,
      temperature: 0.15,
    });

    // NOTE: SDK shape may differ (adapt to your SDK). Here we read text content:
    const assistantText = resp.choices?.[0]?.message?.content ?? resp.choices?.[0]?.text ?? "";

    // 6) update session history (keep last N)
    history.push({ role: "user", content: message });
    history.push({ role: "assistant", content: assistantText });
    sessions.set(sessionId, history.slice(-12));

    // 7) return answer + sources for UI
    const sources = chunks.map(c => ({
      id: c.id,
      title: c.title,
      metadata: c.metadata,
      snippet: c.content.slice(0, 400)
    }));

    res.json({ answer: assistantText });
  } catch (err) {
    console.error("chat error", err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * Optional: streaming endpoint (SSE)
 * This example shows how you'd proxy OpenAI streaming to the client.
 * Implementation details depend on your OpenAI SDK version. Adapt as needed.
 */
app.post("/chat/stream", async (req, res) => {
  try {
    const { sessionId = "anon", message, k = 5 } = req.body;
    if (!message) return res.status(400).json({ error: "message required" });

    const history = sessions.get(sessionId) || [];
    const qEmb = await embedText(message);
    const chunks = await retrieveRelevantChunks(qEmb, k);
    const messages = constructMessages(chunks, history, message, "Afshan");

    // Prepare SSE
    res.set({
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    res.flushHeaders();

    // NOTE: Many OpenAI SDKs provide a streaming interface you can subscribe to.
    // Replace the following pseudo-code with the actual streaming call your SDK supports.
    const stream = await openai.chat.completions.create({
      model: CHAT_MODEL,
      messages,
      stream: true,
    });

    stream.on("data", (chunk) => {
      // chunk is part of the delta; forward to client
      res.write(`data: ${JSON.stringify(chunk)}\n\n`);
    });

    stream.on("end", () => {
      // finalize session memory (you could compose the full output before storing)
      res.write("data: [DONE]\n\n");
      res.end();
    });

    stream.on("error", (err) => {
      res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
      res.end();
    });

  } catch (err) {
    console.error("stream error", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("RAG server running on :3000"));
