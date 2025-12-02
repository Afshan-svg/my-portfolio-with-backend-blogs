import { pool } from "./db.js";
import OpenAI from "openai";
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || ""});

export async function embedText(text) {
  const resp = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });

  return resp.data[0].embedding;  // float[]
}

export async function retrieveRelevantChunks(queryEmbedding, k = 5) {
  // Convert JS array → pgvector literal format
  const vectorString = `[${queryEmbedding.join(",")}]`;

  const res = await pool.query(
    `SELECT id, title, content, metadata,
            embedding <-> $1 AS distance
     FROM rag_docs
     ORDER BY embedding <-> $1
     LIMIT $2`,
    [vectorString, k]
  );

  return res.rows;
}
