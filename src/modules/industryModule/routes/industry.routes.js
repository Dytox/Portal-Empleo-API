import { Router } from 'express';
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
industryRouter.post('/industries', createIndustry);
industryRouter.put('/industries/:id', updateIndustry);
industryRouter.delete('/industries/:id', deleteIndustry);

export default industryRouter;
