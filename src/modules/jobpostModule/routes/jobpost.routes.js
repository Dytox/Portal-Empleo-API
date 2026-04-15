import { Router } from 'express';
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
jobpostRouter.post('/job-posts', createJobPost);
jobpostRouter.put('/job-posts/:id', updateJobPost);
jobpostRouter.delete('/job-posts/:id', deleteJobPost);

export default jobpostRouter;
