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
    const profile = await profileService.createProfile(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profile = await profileService.updateProfile(Number(id), req.body);
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    res.json(profile);
  } catch (err) {
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
