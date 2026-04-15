import { createUserSchema, updateUserSchema, getUserParamsSchema } from '../../../common/schemas/user.schemas.js';
import * as userService from '../services/userService.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const user = await userService.getUserById(Number(id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const validatedParams = getUserParamsSchema.parse({ email: req.params.email });
    const user = await userService.getUserByEmail(validatedParams.email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const validatedData = createUserSchema.parse(req.body);
    const user = await userService.createUser(validatedData);
    res.status(201).json(user);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(400).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const validatedData = updateUserSchema.parse({ id: Number(id), ...req.body });
    const user = await userService.updateUser(Number(id), validatedData);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    if (err.errors) {
      return res.status(400).json({ error: err.errors });
    }
    res.status(400).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(Number(id))) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
    const user = await userService.deleteUser(Number(id));
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
