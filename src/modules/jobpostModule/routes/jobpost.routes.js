import { Router } from 'express';
import { validateBody, validateParams } from '../../../common/middlewares/validateRequest.middleware.js';
import { createJobPostSchema, updateJobPostSchema } from '../../../common/schemas/jobpost.schemas.js';
import {
  getAllJobPosts,
  getJobPostById,
  getJobPostsByCompanyId,
  createJobPost,
  updateJobPost,
  deleteJobPost
} from '../controllers/jobpost.controller.js';

const jobpostRouter = Router();

jobpostRouter.get('/job-posts', getAllJobPosts);
jobpostRouter.get('/job-posts/:id', getJobPostById);
jobpostRouter.get('/companies/:companyId/job-posts', getJobPostsByCompanyId);
jobpostRouter.post('/job-posts', validateBody(createJobPostSchema), createJobPost);
jobpostRouter.put('/job-posts/:id', validateBody(updateJobPostSchema), updateJobPost);
jobpostRouter.delete('/job-posts/:id', deleteJobPost);

export default jobpostRouter;
