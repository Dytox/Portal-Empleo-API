import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createForumPostSchema, updateForumPostSchema } from '../../../common/schemas/forumpost.schemas.js';
import {
  getAllForumPosts,
  getForumPostById,
  getForumPostsByUserId,
  getForumPostsByCategory,
  createForumPost,
  updateForumPost,
  deleteForumPost
} from '../controllers/forumpost.controller.js';

const forumpostRouter = Router();

// Get all forum posts
forumpostRouter.get('/forum/posts', getAllForumPosts);

// Get forum post by ID
forumpostRouter.get('/forum/posts/:id', getForumPostById);

// Get forum posts by user ID
forumpostRouter.get('/users/:userId/forum/posts', getForumPostsByUserId);

// Get forum posts by category
forumpostRouter.get('/forum/posts/category/:category', getForumPostsByCategory);

// Create forum post
forumpostRouter.post('/forum/posts', validateBody(createForumPostSchema), createForumPost);

// Update forum post
forumpostRouter.put('/forum/posts/:id', validateBody(updateForumPostSchema), updateForumPost);

// Delete forum post
forumpostRouter.delete('/forum/posts/:id', deleteForumPost);

export default forumpostRouter;
