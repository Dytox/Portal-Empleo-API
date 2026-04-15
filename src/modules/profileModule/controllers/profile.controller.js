import { createProfileSchema, updateProfileSchema } from '../../../common/schemas/profile.schemas.js';
import * as profileService from '../services/profile.service.js';

export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await profileService.getAllProfiles();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profile = await profileService.getProfileById(Number(id));
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfileByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!Number.isInteger(Number(userId))) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }
    const profile = await profileService.getProfileByUserId(Number(userId));
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found for this user' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProfile = async (req, res) => {
  try {
    const validatedData = createProfileSchema.parse(req.body);
    const profile = await profileService.createProfile(validatedData);
    res.status(201).json(profile);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateProfileSchema.parse({ id: Number(id), ...req.body });
    const profile = await profileService.updateProfile(Number(id), validatedData);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profile = await profileService.deleteProfile(Number(id));
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json({ message: 'Profile deleted successfully', profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
