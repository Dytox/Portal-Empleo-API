import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createDegreeSchema, updateDegreeSchema } from '../../../common/schemas/degree.schemas.js';
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
degreeRouter.post('/degrees', validateBody(createDegreeSchema), createDegree);
degreeRouter.put('/degrees/:id', validateBody(updateDegreeSchema), updateDegree);
degreeRouter.delete('/degrees/:id', deleteDegree);

export default degreeRouter;
