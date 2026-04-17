import * as timelapsesService from '../services/experiencerequiredtimelapse.service.js';

export const getAllExperienceRequiredTimelapses = async (req, res) => {
  try {
    const timelapses = await timelapsesService.getAllExperienceRequiredTimelapses();
    res.json(timelapses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getExperienceRequiredTimelapsesById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const timelapse = await timelapsesService.getExperienceRequiredTimelapsesById(Number(id));
    if (!timelapse) {
      return res.status(404).json({ error: 'Experience required timelapse not found' });
    }
    res.json(timelapse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createExperienceRequiredTimelapses = async (req, res) => {
  try {
    const timelapse = await timelapsesService.createExperienceRequiredTimelapses(req.body);
    res.status(201).json(timelapse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateExperienceRequiredTimelapses = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const timelapse = await timelapsesService.updateExperienceRequiredTimelapses(Number(id), req.body);
    if (!timelapse) {
      return res.status(404).json({ error: 'Experience required timelapse not found' });
    }
    res.json(timelapse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteExperienceRequiredTimelapses = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const timelapse = await timelapsesService.deleteExperienceRequiredTimelapses(Number(id));
    if (!timelapse) {
      return res.status(404).json({ error: 'Experience required timelapse not found' });
    }
    res.json({ message: 'Experience required timelapse deleted successfully', timelapse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
