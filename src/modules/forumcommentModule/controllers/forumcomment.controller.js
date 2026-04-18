import * as forumCommentService from '../services/forumcomment.service.js';

export const getAllForumComments = async (req, res) => {
  try {
    const comments = await forumCommentService.getAllForumComments();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const comment = await forumCommentService.getForumCommentById(Number(id));
    if (!comment) {
      return res.status(404).json({ error: 'Forum Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    if (!Number.isInteger(Number(postId))) {
      return res.status(400).json({ error: 'Invalid post ID format' });
    }
    const comments = await forumCommentService.getForumCommentsByPostId(Number(postId));
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getForumCommentsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!Number.isInteger(Number(userId))) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }
    const comments = await forumCommentService.getForumCommentsByUserId(Number(userId));
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createForumComment = async (req, res) => {
  try {
    const comment = await forumCommentService.createForumComment(req.body);
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateForumComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const comment = await forumCommentService.updateForumComment(Number(id), req.body);
    if (!comment) {
      return res.status(404).json({ error: 'Forum Comment not found' });
    }
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteForumComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const comment = await forumCommentService.deleteForumComment(Number(id));
    if (!comment) {
      return res.status(404).json({ error: 'Forum Comment not found' });
    }
    res.json({ message: 'Forum Comment deleted successfully', comment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
