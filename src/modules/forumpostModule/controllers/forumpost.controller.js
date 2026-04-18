import * as forumPostService from '../services/forumpost.service.js';

export const getAllForumPosts = async (req, res) => {
  try {
    const posts = await forumPostService.getAllForumPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumPostById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const post = await forumPostService.getForumPostById(Number(id));
    if (!post) {
      return res.status(404).json({ error: 'Forum Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumPostsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!Number.isInteger(Number(userId))) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }
    const posts = await forumPostService.getForumPostsByUserId(Number(userId));
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumPostsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const posts = await forumPostService.getForumPostsByCategory(category);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createForumPost = async (req, res) => {
  try {
    const post = await forumPostService.createForumPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateForumPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const post = await forumPostService.updateForumPost(Number(id), req.body);
    if (!post) {
      return res.status(404).json({ error: 'Forum Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteForumPost = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const post = await forumPostService.deleteForumPost(Number(id));
    if (!post) {
      return res.status(404).json({ error: 'Forum Post not found' });
    }
    res.json({ message: 'Forum Post deleted successfully', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
