import { createExternalCompanyLinksSchema, updateExternalCompanyLinksSchema } from '../../../common/schemas/externalcompanylinks.schemas.js';
import * as externalLinksService from '../services/externalcompanylinks.service.js';

export const getAllExternalCompanyLinks = async (req, res) => {
  try {
    const links = await externalLinksService.getAllExternalCompanyLinks();
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getExternalCompanyLinksById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const links = await externalLinksService.getExternalCompanyLinksById(Number(id));
    if (!links) {
      return res.status(404).json({ error: 'External company links not found' });
    }
    res.json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createExternalCompanyLinks = async (req, res) => {
  try {
    const validatedData = createExternalCompanyLinksSchema.parse(req.body);
    const links = await externalLinksService.createExternalCompanyLinks(validatedData);
    res.status(201).json(links);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateExternalCompanyLinks = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateExternalCompanyLinksSchema.parse({ id: Number(id), ...req.body });
    const links = await externalLinksService.updateExternalCompanyLinks(Number(id), validatedData);
    if (!links) {
      return res.status(404).json({ error: 'External company links not found' });
    }
    res.json(links);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteExternalCompanyLinks = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const links = await externalLinksService.deleteExternalCompanyLinks(Number(id));
    if (!links) {
      return res.status(404).json({ error: 'External company links not found' });
    }
    res.json({ message: 'External company links deleted successfully', links });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
