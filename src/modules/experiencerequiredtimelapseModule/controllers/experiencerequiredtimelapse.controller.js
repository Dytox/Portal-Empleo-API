import { createExperienceRequiredTimelapsesSchema, updateExperienceRequiredTimelapsesSchema } from '../../../common/schemas/experiencerequiredtimelapse.schemas.js';
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
    const validatedData = createExperienceRequiredTimelapsesSchema.parse(req.body);
    const timelapse = await timelapsesService.createExperienceRequiredTimelapses(validatedData);
    res.status(201).json(timelapse);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateExperienceRequiredTimelapses = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateExperienceRequiredTimelapsesSchema.parse({ id: Number(id), ...req.body });
    const timelapse = await timelapsesService.updateExperienceRequiredTimelapses(Number(id), validatedData);
    if (!timelapse) {
      return res.status(404).json({ error: 'Experience required timelapse not found' });
    }
    res.json(timelapse);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
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
