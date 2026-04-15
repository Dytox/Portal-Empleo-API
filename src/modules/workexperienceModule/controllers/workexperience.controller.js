import { createWorkExperienceSchema, updateWorkExperienceSchema } from '../../../common/schemas/workexperience.schemas.js';
import * as experienceService from '../services/workexperience.service.js';

export const getAllWorkExperiences = async (req, res) => {
  try {
    const experiences = await experienceService.getAllWorkExperiences();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getWorkExperienceById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const experience = await experienceService.getWorkExperienceById(Number(id));
    if (!experience) {
      return res.status(404).json({ error: 'Work experience not found' });
    }
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getWorkExperiencesByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const experiences = await experienceService.getWorkExperiencesByProfileId(Number(profileId));
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createWorkExperience = async (req, res) => {
  try {
    const validatedData = createWorkExperienceSchema.parse(req.body);
    const experience = await experienceService.createWorkExperience(validatedData);
    res.status(201).json(experience);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateWorkExperienceSchema.parse({ id: Number(id), ...req.body });
    const experience = await experienceService.updateWorkExperience(Number(id), validatedData);
    if (!experience) {
      return res.status(404).json({ error: 'Work experience not found' });
    }
    res.json(experience);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const experience = await experienceService.deleteWorkExperience(Number(id));
    if (!experience) {
      return res.status(404).json({ error: 'Work experience not found' });
    }
    res.json({ message: 'Work experience deleted successfully', experience });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
