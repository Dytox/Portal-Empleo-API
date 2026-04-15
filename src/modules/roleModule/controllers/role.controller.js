import { createRoleSchema, updateRoleSchema } from '../../../common/schemas/role.schemas.js';
import * as roleService from '../services/role.service.js';

export const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const role = await roleService.getRoleById(Number(id));
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createRole = async (req, res) => {
  try {
    const validatedData = createRoleSchema.parse(req.body);
    const role = await roleService.createRole(validatedData);
    res.status(201).json(role);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateRoleSchema.parse({ id: Number(id), ...req.body });
    const role = await roleService.updateRole(Number(id), validatedData);
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json(role);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const role = await roleService.deleteRole(Number(id));
    if (!role) {
      return res.status(404).json({ error: 'Role not found' });
    }
    res.json({ message: 'Role deleted successfully', role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
