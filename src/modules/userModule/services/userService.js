
import { pool } from '../../../common/connections/db-connection.js';

export const getAllUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.users');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getUserById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.users WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const result = await pool.query('SELECT * FROM public.users WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createUser = async (userData) => {
  try {
    const { email, external_id, is_bloqued, role_id } = userData;
    
    // Check if email already exists
    const existingUser = await pool.query('SELECT * FROM public.users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      throw new Error('User with this email already exists');
    }

    const result = await pool.query(
      'INSERT INTO public.users (email, external_id, is_bloqued, role_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, external_id, is_bloqued || false, role_id || 1]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateUser = async (id, userData) => {
  try {
    const { email, is_bloqued, role_id } = userData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (email !== undefined) {
      // Check if new email is already in use by another user
      const existingEmail = await pool.query(
        'SELECT * FROM public.users WHERE email = $1 AND id != $2',
        [email, id]
      );
      if (existingEmail.rows.length > 0) {
        throw new Error('Email is already in use by another user');
      }
      updates.push(`email = $${paramCount++}`);
      values.push(email);
    }
    if (is_bloqued !== undefined) {
      updates.push(`is_bloqued = $${paramCount++}`);
      values.push(is_bloqued);
    }
    if (role_id !== undefined) {
      updates.push(`role_id = $${paramCount++}`);
      values.push(role_id);
    }

    if (updates.length === 0) {
      return null;
    }

    values.push(id);

    const query = `UPDATE public.users SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteUser = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.users WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const creatreUser = createUser; // Keep for backwards compatibility with existing controller
