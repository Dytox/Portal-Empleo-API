import { createAdditionalInfoSchema, updateAdditionalInfoSchema } from '../../../common/schemas/additionalinfo.schemas.js';
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
    const validatedData = createAdditionalInfoSchema.parse(req.body);
    const info = await additionalInfoService.createAdditionalInfo(validatedData);
    res.status(201).json(info);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateAdditionalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateAdditionalInfoSchema.parse({ id: Number(id), ...req.body });
    const info = await additionalInfoService.updateAdditionalInfo(Number(id), validatedData);
    if (!info) {
      return res.status(404).json({ error: 'Additional info not found' });
    }
    res.json(info);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
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
