import { Router } from 'express';
import {
  getAllProfiles,
  getProfileById,
  getProfileByUserId,
  createProfile,
  updateProfile,
  deleteProfile
} from '../controllers/profile.controller.js';

const profileRouter = Router();

// Get all profiles
profileRouter.get('/profiles', getAllProfiles);

// Get profile by ID
profileRouter.get('/profiles/:id', getProfileById);

// Get profile by user ID
profileRouter.get('/users/:userId/profile', getProfileByUserId);

// Create profile
profileRouter.post('/profiles', createProfile);

// Update profile
profileRouter.put('/profiles/:id', updateProfile);

// Delete profile
profileRouter.delete('/profiles/:id', deleteProfile);

export default profileRouter;
