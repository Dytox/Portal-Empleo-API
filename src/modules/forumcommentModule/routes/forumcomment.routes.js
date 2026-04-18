import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createForumCommentSchema, updateForumCommentSchema } from '../../../common/schemas/forumcomment.schemas.js';
import {
  getAllForumComments,
  getForumCommentById,
  getForumCommentsByPostId,
  getForumCommentsByUserId,
  createForumComment,
  updateForumComment,
  deleteForumComment
} from '../controllers/forumcomment.controller.js';

const forumcommentRouter = Router();

// Get all forum comments
forumcommentRouter.get('/forum/comments', getAllForumComments);

// Get forum comment by ID
forumcommentRouter.get('/forum/comments/:id', getForumCommentById);

// Get forum comments by post ID
forumcommentRouter.get('/forum/posts/:postId/comments', getForumCommentsByPostId);

// Get forum comments by user ID
forumcommentRouter.get('/users/:userId/forum/comments', getForumCommentsByUserId);

// Create forum comment
forumcommentRouter.post('/forum/comments', validateBody(createForumCommentSchema), createForumComment);

// Update forum comment
forumcommentRouter.put('/forum/comments/:id', validateBody(updateForumCommentSchema), updateForumComment);

// Delete forum comment
forumcommentRouter.delete('/forum/comments/:id', deleteForumComment);

export default forumcommentRouter;
