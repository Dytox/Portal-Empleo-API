import * as statusService from '../services/status.service.js';

export const getAllStatus = async (req, res) => {
  try {
    const statuses = await statusService.getAllStatus();
    res.json(statuses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getStatusById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const status = await statusService.getStatusById(Number(id));
    if (!status) {
      return res.status(404).json({ error: 'Status not found' });
    }
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createStatus = async (req, res) => {
  try {
    const status = await statusService.createStatus(req.body);
    res.status(201).json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const status = await statusService.updateStatus(Number(id), req.body);
    if (!status) {
      return res.status(404).json({ error: 'Status not found' });
    }
    res.json(status);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const status = await statusService.deleteStatus(Number(id));
    if (!status) {
      return res.status(404).json({ error: 'Status not found' });
    }
    res.json({ message: 'Status deleted successfully', status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
