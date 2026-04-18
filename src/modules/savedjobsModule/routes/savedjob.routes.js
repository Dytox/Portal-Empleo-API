import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createSavedJobSchema } from '../../../common/schemas/savedjob.schemas.js';
import {
  getAllSavedJobs,
  getSavedJobById,
  getSavedJobsByProfileId,
  createSavedJob,
  deleteSavedJob,
  deleteSavedJobByProfileAndJob
} from '../controllers/savedjob.controller.js';

const savedjobRouter = Router();

// Get all saved jobs
savedjobRouter.get('/saved-jobs', getAllSavedJobs);

// Get saved job by ID
savedjobRouter.get('/saved-jobs/:id', getSavedJobById);

// Get saved jobs by profile ID
savedjobRouter.get('/profiles/:profileId/saved-jobs', getSavedJobsByProfileId);

// Create saved job
savedjobRouter.post('/saved-jobs', validateBody(createSavedJobSchema), createSavedJob);

// Delete saved job by ID
savedjobRouter.delete('/saved-jobs/:id', deleteSavedJob);

// Delete saved job by profile and job post ID
savedjobRouter.delete('/profiles/:profileId/saved-jobs/:jobPostId', deleteSavedJobByProfileAndJob);

export default savedjobRouter;
