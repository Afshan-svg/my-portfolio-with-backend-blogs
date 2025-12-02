// ingest/preprocess.js
import fs from "fs/promises";
import path from "path";
import { pool } from "../db.js";
import { chunkText } from "./chunk.js";
import { embedBatch } from "./embed.js";

console.log("[preprocess] Script start");

const DIR = "./uploadFolder";

async function processFile(file) {
    console.log("\n==============================");
    console.log("[processFile] START:", file);
    console.log("==============================");

    const filepath = path.join(DIR, file);
    console.log("[processFile] Full file path:", filepath);

    let raw;

    try {
        raw = await fs.readFile(filepath, "utf8");
    } catch (err) {
        console.error("[processFile] ERROR reading file:", err.message);
        return;
    }

    console.log("[processFile] RAW LENGTH =", raw.length);

    console.log("[processFile] Calling chunkText...");
    const chunks = chunkText(raw);

    console.log("[processFile] Chunks created:", chunks.length);

    for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        console.log(`[processFile] Processing chunk ${i}/${chunks.length - 1}, size: ${chunk.length}`);

        // embed 1 at a time
        let embeddings;
        try {
            console.log(`[processFile] Calling embedBatch for chunk ${i}`);
            embeddings = await embedBatch([chunk]);  // returns array of 1 embedding
        } catch (err) {
            console.error("[processFile] embedBatch FAILED:", err.message);
            continue;
        }

        console.log(`[processFile] Embedding length for chunk ${i}:`, embeddings[0].length);

        console.log(`[processFile] Inserting into DB chunk ${i}`);
        console.log(`[processFile] Inserting into DB chunk ${i}`);

        try {
            const vectorString = `[${embeddings[0].join(",")}]`;  // <-- FIX

            await pool.query(
                `INSERT INTO rag_docs (title, content, embedding, metadata)
         VALUES ($1, $2, $3, $4)`,
                [
                    file,            // title
                    chunk,           // chunk text
                    vectorString,    // correct pgvector format
                    JSON.stringify({ file, chunk: i })
                ]
            );

            console.log(`[processFile] Chunk ${i} inserted successfully`);

        }
        catch (err) {
            console.error("[processFile] DB insert FAILED:", err.message);
            continue;
        }

        console.log(`[processFile] Chunk ${i} inserted successfully`);
    }

    console.log("[processFile] END:", file);
    console.log("==============================\n");
}

async function main() {
    console.log("[main] Reading directory:", DIR);

    const files = await fs.readdir(DIR);
    console.log("[main] Files found:", files);

    for (const file of files) {
        if (file.endsWith(".txt") || file.endsWith(".md")) {
            console.log("[main] Processing:", file);
            await processFile(file);
        } else {
            console.log("[main] Skipping unsupported file:", file);
        }
    }

    console.log("[main] DONE");
    process.exit(0);
}

main();
