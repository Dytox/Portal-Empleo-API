import { createCompanySizeSchema, updateCompanySizeSchema } from '../../../common/schemas/companysize.schemas.js';
import * as companySizeService from '../services/companysize.service.js';

export const getAllCompanySizes = async (req, res) => {
  try {
    const sizes = await companySizeService.getAllCompanySizes();
    res.json(sizes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCompanySizeById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const size = await companySizeService.getCompanySizeById(Number(id));
    if (!size) {
      return res.status(404).json({ error: 'Company size not found' });
    }
    res.json(size);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createCompanySize = async (req, res) => {
  try {
    const validatedData = createCompanySizeSchema.parse(req.body);
    const size = await companySizeService.createCompanySize(validatedData);
    res.status(201).json(size);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateCompanySize = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateCompanySizeSchema.parse({ id: Number(id), ...req.body });
    const size = await companySizeService.updateCompanySize(Number(id), validatedData);
    if (!size) {
      return res.status(404).json({ error: 'Company size not found' });
    }
    res.json(size);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteCompanySize = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const size = await companySizeService.deleteCompanySize(Number(id));
    if (!size) {
      return res.status(404).json({ error: 'Company size not found' });
    }
    res.json({ message: 'Company size deleted successfully', size });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
