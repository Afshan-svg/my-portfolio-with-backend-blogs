export function chunkText(text, maxChars = 900, overlap = 150) {
  console.log("[chunkText] START text length:", text.length);
  const chunks = [];

  let i = 0;
  let guard = 0;

  while (i < text.length) {
    guard++;
    if (guard > 1000000) {
      console.error("🚨 chunkText infinite loop prevented! i =", i);
      break;
    }

    const end = Math.min(i + maxChars, text.length);
    const chunk = text.slice(i, end);

    chunks.push(chunk);

    const next = end - overlap;

    if (next <= i) {
      console.error("🚨 Overlap issue — breaking to prevent infinite loop");
      break;
    }

    i = next;
  }

  console.log("[chunkText] END total chunks:", chunks.length);
  return chunks;
}
