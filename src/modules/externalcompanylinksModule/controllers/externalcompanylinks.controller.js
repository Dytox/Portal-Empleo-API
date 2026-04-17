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
    const links = await externalLinksService.createExternalCompanyLinks(req.body);
    res.status(201).json(links);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateExternalCompanyLinks = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const links = await externalLinksService.updateExternalCompanyLinks(Number(id), req.body);
    if (!links) {
      return res.status(404).json({ error: 'External company links not found' });
    }
    res.json(links);
  } catch (err) {
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
