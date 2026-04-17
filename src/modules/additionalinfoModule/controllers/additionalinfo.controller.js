import * as additionalInfoService from '../services/additionalinfo.service.js';

export const getAllAdditionalInfo = async (req, res) => {
  try {
    const info = await additionalInfoService.getAllAdditionalInfo();
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAdditionalInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const info = await additionalInfoService.getAdditionalInfoById(Number(id));
    if (!info) {
      return res.status(404).json({ error: 'Additional info not found' });
    }
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createAdditionalInfo = async (req, res) => {
  try {
    const info = await additionalInfoService.createAdditionalInfo(req.body);
    res.status(201).json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAdditionalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const info = await additionalInfoService.updateAdditionalInfo(Number(id), req.body);
    if (!info) {
      return res.status(404).json({ error: 'Additional info not found' });
    }
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAdditionalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const info = await additionalInfoService.deleteAdditionalInfo(Number(id));
    if (!info) {
      return res.status(404).json({ error: 'Additional info not found' });
    }
    res.json({ message: 'Additional info deleted successfully', info });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
