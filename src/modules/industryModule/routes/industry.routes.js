import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createIndustrySchema, updateIndustrySchema } from '../../../common/schemas/industry.schemas.js';
import {
  getAllIndustries,
  getIndustryById,
  createIndustry,
  updateIndustry,
  deleteIndustry
} from '../controllers/industry.controller.js';

const industryRouter = Router();

industryRouter.get('/industries', getAllIndustries);
industryRouter.get('/industries/:id', getIndustryById);
industryRouter.post('/industries', validateBody(createIndustrySchema), createIndustry);
industryRouter.put('/industries/:id', validateBody(updateIndustrySchema), updateIndustry);
industryRouter.delete('/industries/:id', deleteIndustry);

export default industryRouter;
