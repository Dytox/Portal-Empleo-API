import { Router } from 'express';
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
statusRouter.post('/statuses', createStatus);
statusRouter.put('/statuses/:id', updateStatus);
statusRouter.delete('/statuses/:id', deleteStatus);

export default statusRouter;
