import { pool } from '../../../common/connections/db-connection.js';

export const getAllStatus = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.status');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getStatusById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.status WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createStatus = async (statusData) => {
  try {
    const { status_name } = statusData;
    const result = await pool.query(
      'INSERT INTO public.status (status_name) VALUES ($1) RETURNING *',
      [status_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateStatus = async (id, statusData) => {
  try {
    const { status_name } = statusData;
    const result = await pool.query(
      'UPDATE public.status SET status_name = $1 WHERE id = $2 RETURNING *',
      [status_name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteStatus = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.status WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
