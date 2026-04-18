import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createJobAlertSchema, updateJobAlertSchema } from '../../../common/schemas/jobalert.schemas.js';
import {
  getAllJobAlerts,
  getJobAlertById,
  getJobAlertsByProfileId,
  createJobAlert,
  updateJobAlert,
  deleteJobAlert
} from '../controllers/jobalert.controller.js';

const jobalertRouter = Router();

// Get all job alerts
jobalertRouter.get('/job-alerts', getAllJobAlerts);

// Get job alert by ID
jobalertRouter.get('/job-alerts/:id', getJobAlertById);

// Get job alerts by profile ID
jobalertRouter.get('/profiles/:profileId/job-alerts', getJobAlertsByProfileId);

// Create job alert
jobalertRouter.post('/job-alerts', validateBody(createJobAlertSchema), createJobAlert);

// Update job alert
jobalertRouter.put('/job-alerts/:id', validateBody(updateJobAlertSchema), updateJobAlert);

// Delete job alert
jobalertRouter.delete('/job-alerts/:id', deleteJobAlert);

export default jobalertRouter;
