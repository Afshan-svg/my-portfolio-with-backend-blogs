// blogRoutes.js
import express from "express";
import { createBlog } from "./createBlog.js";

const router = express.Router();

router.post("/blogs", async (req, res) => {
  try {
    const newBlog = await createBlog(req.body);
    res.json(newBlog);
  } catch (err) {
    res.status(500).json({ error: "Failed to create blog" });
  }
});

export default router;
