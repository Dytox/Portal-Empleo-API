import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createUserSchema, updateUserSchema } from '../../../common/schemas/user.schemas.js';
import {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller.js';

const userRouter = Router();

// Get all users
userRouter.get('/users', getAllUsers);

// Get user by ID
userRouter.get('/users/:id', getUserById);

// Get user by email
userRouter.get('/users/email/:email', getUserByEmail);

// Create user
userRouter.post('/users', validateBody(createUserSchema), createUser);

// Update user
userRouter.put('/users/:id', validateBody(updateUserSchema), updateUser);

// Delete user
userRouter.delete('/users/:id', deleteUser);

export default userRouter;
