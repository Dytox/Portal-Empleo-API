import { Router } from 'express';
import {
  getAllExperienceRequiredTimelapses,
  getExperienceRequiredTimelapsesById,
  createExperienceRequiredTimelapses,
  updateExperienceRequiredTimelapses,
  deleteExperienceRequiredTimelapses
} from '../controllers/experiencerequiredtimelapse.controller.js';

const experiencerequiredtimelapseRouter = Router();

experiencerequiredtimelapseRouter.get('/experience-required-timelapses', getAllExperienceRequiredTimelapses);
experiencerequiredtimelapseRouter.get('/experience-required-timelapses/:id', getExperienceRequiredTimelapsesById);
experiencerequiredtimelapseRouter.post('/experience-required-timelapses', createExperienceRequiredTimelapses);
experiencerequiredtimelapseRouter.put('/experience-required-timelapses/:id', updateExperienceRequiredTimelapses);
experiencerequiredtimelapseRouter.delete('/experience-required-timelapses/:id', deleteExperienceRequiredTimelapses);

export default experiencerequiredtimelapseRouter;
