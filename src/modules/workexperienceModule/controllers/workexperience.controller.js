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
    const experience = await experienceService.createWorkExperience(req.body);
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateWorkExperience = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const experience = await experienceService.updateWorkExperience(Number(id), req.body);
    if (!experience) {
      return res.status(404).json({ error: 'Work experience not found' });
    }
    res.json(experience);
  } catch (err) {
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
