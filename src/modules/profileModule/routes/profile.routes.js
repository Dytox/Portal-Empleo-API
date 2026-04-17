import { Router } from 'express';
import { validateBody } from '../../../common/middlewares/validateRequest.middleware.js';
import { createProfileSchema, updateProfileSchema } from '../../../common/schemas/profile.schemas.js';
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
profileRouter.post('/profiles', validateBody(createProfileSchema), createProfile);

// Update profile
profileRouter.put('/profiles/:id', validateBody(updateProfileSchema), updateProfile);

// Delete profile
profileRouter.delete('/profiles/:id', deleteProfile);

export default profileRouter;
