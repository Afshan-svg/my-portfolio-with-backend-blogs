import { pool } from "./db.js";

export async function createBlog(blogData) {
  const { title, date, readTime, image, content } = blogData;

  const query = `
    INSERT INTO blogs (title, date, read_time, image, content)
    VALUES ($1, $2, $3, $4, $5::jsonb)
    RETURNING *;
  `;

  const values = [
    title,
    date,
    readTime,
    image,
    JSON.stringify(content),
  ];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("Error inserting blog:", err);
    throw err;
  }
}
