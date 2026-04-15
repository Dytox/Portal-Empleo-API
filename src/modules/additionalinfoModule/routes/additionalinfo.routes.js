import { Router } from 'express';
import {
  getAllAdditionalInfo,
  getAdditionalInfoById,
  createAdditionalInfo,
  updateAdditionalInfo,
  deleteAdditionalInfo
} from '../controllers/additionalinfo.controller.js';

const additionalinfoRouter = Router();

additionalinfoRouter.get('/additional-info', getAllAdditionalInfo);
additionalinfoRouter.get('/additional-info/:id', getAdditionalInfoById);
additionalinfoRouter.post('/additional-info', createAdditionalInfo);
additionalinfoRouter.put('/additional-info/:id', updateAdditionalInfo);
additionalinfoRouter.delete('/additional-info/:id', deleteAdditionalInfo);

export default additionalinfoRouter;
