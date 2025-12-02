// embed.js
import OpenAI from "openai";

console.log("[embed.js] Initializing OpenAI client...");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

export async function embedBatch(textArray) {
  console.log("[embedBatch] START batch length:", textArray.length);

  textArray.forEach((txt, idx) => {
    console.log(`[embedBatch] item ${idx} size = ${txt.length}`);
  });

  console.log("[embedBatch] Calling OpenAI embeddings...");

  let res;
  try {
    res = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: textArray,
    });
  } catch (err) {
    console.error("[embedBatch] ERROR calling OpenAI:", err.message);
    throw err;
  }

  console.log("[embedBatch] Received embeddings count:", res.data.length);

  res.data.forEach((d, idx) => {
    console.log(`[embedBatch] embedding ${idx} length = ${d.embedding.length}`);
  });

  console.log("[embedBatch] END");
  return res.data.map(x => x.embedding);
}
