import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createExperienceRequiredTimelapsesSchema, updateExperienceRequiredTimelapsesSchema } from '../../../common/schemas/experiencerequiredtimelapse.schemas.js';
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
experiencerequiredtimelapseRouter.post('/experience-required-timelapses', validateBody(createExperienceRequiredTimelapsesSchema), createExperienceRequiredTimelapses);
experiencerequiredtimelapseRouter.put('/experience-required-timelapses/:id', validateBody(updateExperienceRequiredTimelapsesSchema), updateExperienceRequiredTimelapses);
experiencerequiredtimelapseRouter.delete('/experience-required-timelapses/:id', deleteExperienceRequiredTimelapses);

export default experiencerequiredtimelapseRouter;
