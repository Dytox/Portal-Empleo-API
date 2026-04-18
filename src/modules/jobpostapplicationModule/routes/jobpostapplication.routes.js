import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createJobPostApplicationSchema, updateJobPostApplicationSchema } from '../../../common/schemas/jobpostapplication.schemas.js';
import {
  getAllApplications,
  getApplicationById,
  getApplicationsByProfileId,
  getApplicationsByJobPostId,
  createApplication,
  updateApplication,
  deleteApplication
} from '../controllers/jobpostapplication.controller.js';

const jobpostapplicationRouter = Router();

// Get all applications
jobpostapplicationRouter.get('/applications', getAllApplications);

// Get application by ID
jobpostapplicationRouter.get('/applications/:id', getApplicationById);

// Get applications by profile ID
jobpostapplicationRouter.get('/profiles/:profileId/applications', getApplicationsByProfileId);

// Get applications by job post ID
jobpostapplicationRouter.get('/job-posts/:jobPostId/applications', getApplicationsByJobPostId);

// Create application
jobpostapplicationRouter.post('/applications', validateBody(createJobPostApplicationSchema), createApplication);

// Update application
jobpostapplicationRouter.put('/applications/:id', validateBody(updateJobPostApplicationSchema), updateApplication);

// Delete application
jobpostapplicationRouter.delete('/applications/:id', deleteApplication);

export default jobpostapplicationRouter;
