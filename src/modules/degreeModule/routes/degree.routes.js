import { Router } from 'express';
import {
  getAllDegrees,
  getDegreeById,
  createDegree,
  updateDegree,
  deleteDegree
} from '../controllers/degree.controller.js';

const degreeRouter = Router();

degreeRouter.get('/degrees', getAllDegrees);
degreeRouter.get('/degrees/:id', getDegreeById);
degreeRouter.post('/degrees', createDegree);
degreeRouter.put('/degrees/:id', updateDegree);
degreeRouter.delete('/degrees/:id', deleteDegree);

export default degreeRouter;
