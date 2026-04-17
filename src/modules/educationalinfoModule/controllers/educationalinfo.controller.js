import * as educationalInfoService from '../services/educationalinfo.service.js';

export const getAllEducationalInfo = async (req, res) => {
  try {
    const educationalInfo = await educationalInfoService.getAllEducationalInfo();
    res.json(educationalInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEducationalInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const info = await educationalInfoService.getEducationalInfoById(Number(id));
    if (!info) {
      return res.status(404).json({ error: 'Educational info not found' });
    }
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEducationalInfoByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const educationalInfo = await educationalInfoService.getEducationalInfoByProfileId(Number(profileId));
    res.json(educationalInfo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createEducationalInfo = async (req, res) => {
  try {
    const info = await educationalInfoService.createEducationalInfo(req.body);
    res.status(201).json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateEducationalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const info = await educationalInfoService.updateEducationalInfo(Number(id), req.body);
    if (!info) {
      return res.status(404).json({ error: 'Educational info not found' });
    }
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteEducationalInfo = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const info = await educationalInfoService.deleteEducationalInfo(Number(id));
    if (!info) {
      return res.status(404).json({ error: 'Educational info not found' });
    }
    res.json({ message: 'Educational info deleted successfully', info });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
