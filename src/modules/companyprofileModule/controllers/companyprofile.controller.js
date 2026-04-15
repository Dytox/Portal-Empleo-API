import { createCompanyProfileSchema, updateCompanyProfileSchema } from '../../../common/schemas/companyprofile.schemas.js';
import * as companyProfileService from '../services/companyprofile.service.js';

export const getAllCompanyProfiles = async (req, res) => {
  try {
    const profiles = await companyProfileService.getAllCompanyProfiles();
    res.json(profiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompanyProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profile = await companyProfileService.getCompanyProfileById(Number(id));
    if (!profile) {
      return res.status(404).json({ error: 'Company profile not found' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompanyProfileByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!Number.isInteger(Number(userId))) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }
    const profile = await companyProfileService.getCompanyProfileByUserId(Number(userId));
    if (!profile) {
      return res.status(404).json({ error: 'Company profile not found for this user' });
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCompanyProfile = async (req, res) => {
  try {
    const validatedData = createCompanyProfileSchema.parse(req.body);
    const profile = await companyProfileService.createCompanyProfile(validatedData);
    res.status(201).json(profile);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateCompanyProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateCompanyProfileSchema.parse({ id: Number(id), ...req.body });
    const profile = await companyProfileService.updateCompanyProfile(Number(id), validatedData);
    if (!profile) {
      return res.status(404).json({ error: 'Company profile not found' });
    }
    res.json(profile);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteCompanyProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profile = await companyProfileService.deleteCompanyProfile(Number(id));
    if (!profile) {
      return res.status(404).json({ error: 'Company profile not found' });
    }
    res.json({ message: 'Company profile deleted successfully', profile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
