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
    const degree = await degreeService.createDegree(req.body);
    res.status(201).json(degree);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateDegree = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const degree = await degreeService.updateDegree(Number(id), req.body);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }
    res.json(degree);
  } catch (err) {
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
