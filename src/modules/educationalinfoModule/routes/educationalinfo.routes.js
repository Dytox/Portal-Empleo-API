import { Router } from 'express';
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
educationalinfoRouter.post('/educational-info', createEducationalInfo);
educationalinfoRouter.put('/educational-info/:id', updateEducationalInfo);
educationalinfoRouter.delete('/educational-info/:id', deleteEducationalInfo);

export default educationalinfoRouter;
