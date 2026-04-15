import { createSkillSchema, updateSkillSchema, createProfileSkillSchema } from '../../../common/schemas/skill.schemas.js';
import * as skillService from '../services/skill.service.js';

// Skill handlers
export const getAllSkills = async (req, res) => {
  try {
    const skills = await skillService.getAllSkills();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getSkillById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const skill = await skillService.getSkillById(Number(id));
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createSkill = async (req, res) => {
  try {
    const validatedData = createSkillSchema.parse(req.body);
    const skill = await skillService.createSkill(validatedData);
    res.status(201).json(skill);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateSkillSchema.parse({ id: Number(id), ...req.body });
    const skill = await skillService.updateSkill(Number(id), validatedData);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const skill = await skillService.deleteSkill(Number(id));
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json({ message: 'Skill deleted successfully', skill });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Profile Skill handlers
export const getAllProfileSkills = async (req, res) => {
  try {
    const skills = await skillService.getAllProfileSkills();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfileSkillById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profileSkill = await skillService.getProfileSkillById(Number(id));
    if (!profileSkill) {
      return res.status(404).json({ error: 'Profile skill not found' });
    }
    res.json(profileSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfileSkillsByProfileId = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!Number.isInteger(Number(profileId))) {
      return res.status(400).json({ error: 'Invalid profile ID format' });
    }
    const skills = await skillService.getProfileSkillsByProfileId(Number(profileId));
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createProfileSkill = async (req, res) => {
  try {
    const validatedData = createProfileSkillSchema.parse(req.body);
    const profileSkill = await skillService.createProfileSkill(validatedData);
    res.status(201).json(profileSkill);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteProfileSkill = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const profileSkill = await skillService.deleteProfileSkill(Number(id));
    if (!profileSkill) {
      return res.status(404).json({ error: 'Profile skill not found' });
    }
    res.json({ message: 'Profile skill deleted successfully', profileSkill });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
