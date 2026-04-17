import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createWorkExperienceSchema, updateWorkExperienceSchema } from '../../../common/schemas/workexperience.schemas.js';
import {
  getAllWorkExperiences,
  getWorkExperienceById,
  getWorkExperiencesByProfileId,
  createWorkExperience,
  updateWorkExperience,
  deleteWorkExperience
} from '../controllers/workexperience.controller.js';

const workexperienceRouter = Router();

// Get all work experiences
workexperienceRouter.get('/work-experiences', getAllWorkExperiences);

// Get work experience by ID
workexperienceRouter.get('/work-experiences/:id', getWorkExperienceById);

// Get work experiences by profile ID
workexperienceRouter.get('/profiles/:profileId/work-experiences', getWorkExperiencesByProfileId);

// Create work experience
workexperienceRouter.post('/work-experiences', validateBody(createWorkExperienceSchema), createWorkExperience);

// Update work experience
workexperienceRouter.put('/work-experiences/:id', validateBody(updateWorkExperienceSchema), updateWorkExperience);

// Delete work experience
workexperienceRouter.delete('/work-experiences/:id', deleteWorkExperience);

export default workexperienceRouter;
