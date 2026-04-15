import { Router } from 'express';
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
roleRouter.post('/roles', createRole);

// Update role
roleRouter.put('/roles/:id', updateRole);

// Delete role
roleRouter.delete('/roles/:id', deleteRole);

export default roleRouter;
