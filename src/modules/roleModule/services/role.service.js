import { pool } from '../../../common/connections/db-connection.js';

export const getAllRoles = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.roles');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getRoleById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.roles WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createRole = async (roleData) => {
  try {
    const { id, name } = roleData;
    const result = await pool.query(
      'INSERT INTO public.roles (id, name) VALUES ($1, $2) RETURNING *',
      [id, name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateRole = async (id, roleData) => {
  try {
    const { name } = roleData;
    const result = await pool.query(
      'UPDATE public.roles SET name = $1 WHERE id = $2 RETURNING *',
      [name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteRole = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.roles WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
