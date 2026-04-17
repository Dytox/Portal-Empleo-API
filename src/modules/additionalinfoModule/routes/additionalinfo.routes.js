import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createAdditionalInfoSchema, updateAdditionalInfoSchema } from '../../../common/schemas/additionalinfo.schemas.js';
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
additionalinfoRouter.post('/additional-info', validateBody(createAdditionalInfoSchema), createAdditionalInfo);
additionalinfoRouter.put('/additional-info/:id', validateBody(updateAdditionalInfoSchema), updateAdditionalInfo);
additionalinfoRouter.delete('/additional-info/:id', deleteAdditionalInfo);

export default additionalinfoRouter;
