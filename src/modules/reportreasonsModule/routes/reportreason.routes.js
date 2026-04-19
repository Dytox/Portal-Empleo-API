import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createReportReasonSchema } from '../../../common/schemas/reportreason.schemas.js';
import {
  getAllReportReasons,
  getReportReasonById,
  createReportReason,
  deleteReportReason,
} from '../controllers/reportreason.controller.js';

const reportreasonRouter = Router();

// Get all report reasons
reportreasonRouter.get('/report-reasons', getAllReportReasons);

// Get report reason by ID
reportreasonRouter.get('/report-reasons/:id', getReportReasonById);

// Create report reason
reportreasonRouter.post('/report-reasons', validateBody(createReportReasonSchema), createReportReason);

// Delete report reason
reportreasonRouter.delete('/report-reasons/:id', deleteReportReason);

export default reportreasonRouter;
