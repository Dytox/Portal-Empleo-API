import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createForumReportSchema, updateForumReportSchema } from '../../../common/schemas/forumreport.schemas.js';
import {
  getAllForumReports,
  getForumReportById,
  getForumReportsByReporterId,
  getForumReportsByStatus,
  getForumReportsByPostId,
  getForumReportsByCommentId,
  createForumReport,
  updateForumReport,
  deleteForumReport,
} from '../controllers/forumreport.controller.js';

const forumreportRouter = Router();

// Get all forum reports
forumreportRouter.get('/forum/reports', getAllForumReports);

// Get forum report by ID
forumreportRouter.get('/forum/reports/:id', getForumReportById);

// Get forum reports by reporter ID
forumreportRouter.get('/users/:reporterId/forum/reports', getForumReportsByReporterId);

// Get forum reports by status
forumreportRouter.get('/forum/reports/status/:status', getForumReportsByStatus);

// Get forum reports by post ID
forumreportRouter.get('/forum/posts/:postId/reports', getForumReportsByPostId);

// Get forum reports by comment ID
forumreportRouter.get('/forum/comments/:commentId/reports', getForumReportsByCommentId);

// Create forum report
forumreportRouter.post('/forum/reports', validateBody(createForumReportSchema), createForumReport);

// Update forum report
forumreportRouter.put('/forum/reports/:id', validateBody(updateForumReportSchema), updateForumReport);

// Delete forum report
forumreportRouter.delete('/forum/reports/:id', deleteForumReport);

export default forumreportRouter;
