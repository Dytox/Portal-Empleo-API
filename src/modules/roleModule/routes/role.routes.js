import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createRoleSchema, updateRoleSchema } from '../../../common/schemas/role.schemas.js';
import {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole
} from '../controllers/role.controller.js';

const roleRouter = Router();

// Get all roles
roleRouter.get('/roles', getAllRoles);

// Get role by ID
roleRouter.get('/roles/:id', getRoleById);

// Create role
roleRouter.post('/roles', validateBody(createRoleSchema), createRole);

// Update role
roleRouter.put('/roles/:id', validateBody(updateRoleSchema), updateRole);

// Delete role
roleRouter.delete('/roles/:id', deleteRole);

export default roleRouter;
