import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createResourceSchema, updateResourceSchema } from '../../../common/schemas/resource.schemas.js';
import {
  getAllResources,
  getResourceById,
  getResourcesByType,
  createResource,
  updateResource,
  deleteResource
} from '../controllers/resource.controller.js';

const resourceRouter = Router();

// Get all resources
resourceRouter.get('/resources', getAllResources);

// Get resource by ID
resourceRouter.get('/resources/:id', getResourceById);

// Get resources by type
resourceRouter.get('/resources/type/:type', getResourcesByType);

// Create resource
resourceRouter.post('/resources', validateBody(createResourceSchema), createResource);

// Update resource
resourceRouter.put('/resources/:id', validateBody(updateResourceSchema), updateResource);

// Delete resource
resourceRouter.delete('/resources/:id', deleteResource);

export default resourceRouter;
