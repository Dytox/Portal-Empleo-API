import * as industryService from '../services/industry.service.js';

export const getAllIndustries = async (req, res) => {
  try {
    const industries = await industryService.getAllIndustries();
    res.json(industries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getIndustryById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const industry = await industryService.getIndustryById(Number(id));
    if (!industry) {
      return res.status(404).json({ error: 'Industry not found' });
    }
    res.json(industry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createIndustry = async (req, res) => {
  try {
    const industry = await industryService.createIndustry(req.body);
    res.status(201).json(industry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateIndustry = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const industry = await industryService.updateIndustry(Number(id), req.body);
    if (!industry) {
      return res.status(404).json({ error: 'Industry not found' });
    }
    res.json(industry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteIndustry = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const industry = await industryService.deleteIndustry(Number(id));
    if (!industry) {
      return res.status(404).json({ error: 'Industry not found' });
    }
    res.json({ message: 'Industry deleted successfully', industry });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

