import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createCompanySizeSchema, updateCompanySizeSchema } from '../../../common/schemas/companysize.schemas.js';
import {
  getAllCompanySizes,
  getCompanySizeById,
  createCompanySize,
  updateCompanySize,
  deleteCompanySize
} from '../controllers/companysize.controller.js';

const companysizeRouter = Router();

companysizeRouter.get('/company-sizes', getAllCompanySizes);
companysizeRouter.get('/company-sizes/:id', getCompanySizeById);
companysizeRouter.post('/company-sizes', validateBody(createCompanySizeSchema), createCompanySize);
companysizeRouter.put('/company-sizes/:id', validateBody(updateCompanySizeSchema), updateCompanySize);
companysizeRouter.delete('/company-sizes/:id', deleteCompanySize);

export default companysizeRouter;
