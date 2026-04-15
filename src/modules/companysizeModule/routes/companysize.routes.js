import { Router } from 'express';
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
companysizeRouter.post('/company-sizes', createCompanySize);
companysizeRouter.put('/company-sizes/:id', updateCompanySize);
companysizeRouter.delete('/company-sizes/:id', deleteCompanySize);

export default companysizeRouter;
