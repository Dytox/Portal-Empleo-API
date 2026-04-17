import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createStatusSchema, updateStatusSchema } from '../../../common/schemas/status.schemas.js';
import {
  getAllStatus,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
} from '../controllers/status.controller.js';

const statusRouter = Router();

statusRouter.get('/statuses', getAllStatus);
statusRouter.get('/statuses/:id', getStatusById);
statusRouter.post('/statuses', validateBody(createStatusSchema), createStatus);
statusRouter.put('/statuses/:id', validateBody(updateStatusSchema), updateStatus);
statusRouter.delete('/statuses/:id', deleteStatus);

export default statusRouter;
