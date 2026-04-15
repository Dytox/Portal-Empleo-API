import { Router } from 'express';
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
userRouter.post('/users', createUser);

// Update user
userRouter.put('/users/:id', updateUser);

// Delete user
userRouter.delete('/users/:id', deleteUser);

export default userRouter;
