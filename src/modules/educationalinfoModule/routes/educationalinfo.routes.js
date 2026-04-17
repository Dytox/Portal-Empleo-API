import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createEducationalInfoSchema, updateEducationalInfoSchema } from '../../../common/schemas/educationalinfo.schemas.js';
import {
  getAllEducationalInfo,
  getEducationalInfoById,
  getEducationalInfoByProfileId,
  createEducationalInfo,
  updateEducationalInfo,
  deleteEducationalInfo
} from '../controllers/educationalinfo.controller.js';

const educationalinfoRouter = Router();

educationalinfoRouter.get('/educational-info', getAllEducationalInfo);
educationalinfoRouter.get('/educational-info/:id', getEducationalInfoById);
educationalinfoRouter.get('/profiles/:profileId/educational-info', getEducationalInfoByProfileId);
educationalinfoRouter.post('/educational-info', validateBody(createEducationalInfoSchema), createEducationalInfo);
educationalinfoRouter.put('/educational-info/:id', validateBody(updateEducationalInfoSchema), updateEducationalInfo);
educationalinfoRouter.delete('/educational-info/:id', deleteEducationalInfo);

export default educationalinfoRouter;
