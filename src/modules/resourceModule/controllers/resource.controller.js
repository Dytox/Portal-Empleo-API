import * as resourceService from '../services/resource.service.js';

export const getAllResources = async (req, res) => {
  try {
    const resources = await resourceService.getAllResources();
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getResourceById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const resource = await resourceService.getResourceById(Number(id));
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getResourcesByType = async (req, res) => {
  try {
    const { type } = req.params;
    const resources = await resourceService.getResourcesByType(type);
    res.json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createResource = async (req, res) => {
  try {
    const resource = await resourceService.createResource(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateResource = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const resource = await resourceService.updateResource(Number(id), req.body);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json(resource);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteResource = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const resource = await resourceService.deleteResource(Number(id));
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.json({ message: 'Resource deleted successfully', resource });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
