import { createDegreeSchema, updateDegreeSchema } from '../../../common/schemas/degree.schemas.js';
import * as degreeService from '../services/degree.service.js';

export const getAllDegrees = async (req, res) => {
  try {
    const degrees = await degreeService.getAllDegrees();
    res.json(degrees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getDegreeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const degree = await degreeService.getDegreeById(Number(id));
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    res.json(degree);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createDegree = async (req, res) => {
  try {
    const validatedData = createDegreeSchema.parse(req.body);
    const degree = await degreeService.createDegree(validatedData);
    res.status(201).json(degree);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateDegree = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateDegreeSchema.parse({ id: Number(id), ...req.body });
    const degree = await degreeService.updateDegree(Number(id), validatedData);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    res.json(degree);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteDegree = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const degree = await degreeService.deleteDegree(Number(id));
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    res.json({ message: 'Degree deleted successfully', degree });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
