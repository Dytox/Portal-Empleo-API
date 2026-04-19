import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createModerationActionSchema } from '../../../common/schemas/moderationaction.schemas.js';
import {
  getAllModerationActions,
  getModerationActionById,
  getModerationActionsByReportId,
  getModerationActionsByAdminId,
  getModerationActionsByTargetUserId,
  getModerationActionsByActionType,
  createModerationAction,
  deleteModerationAction,
} from '../controllers/moderationaction.controller.js';

const moderationactionRouter = Router();

// Get all moderation actions
moderationactionRouter.get('/moderation/actions', getAllModerationActions);

// Get moderation action by ID
moderationactionRouter.get('/moderation/actions/:id', getModerationActionById);

// Get moderation actions by report ID
moderationactionRouter.get('/forum/reports/:reportId/moderation/actions', getModerationActionsByReportId);

// Get moderation actions by admin ID
moderationactionRouter.get('/users/:adminId/moderation/actions', getModerationActionsByAdminId);

// Get moderation actions by target user ID
moderationactionRouter.get('/users/:targetUserId/moderation/actions/target', getModerationActionsByTargetUserId);

// Get moderation actions by action type
moderationactionRouter.get('/moderation/actions/type/:actionType', getModerationActionsByActionType);

// Create moderation action
moderationactionRouter.post('/moderation/actions', validateBody(createModerationActionSchema), createModerationAction);

// Delete moderation action
moderationactionRouter.delete('/moderation/actions/:id', deleteModerationAction);

export default moderationactionRouter;
