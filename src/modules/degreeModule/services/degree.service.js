import { pool } from '../../../common/connections/db-connection.js';

export const getAllDegrees = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.degrees');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getDegreeById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.degrees WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createDegree = async (degreeData) => {
  try {
    const { degree_name } = degreeData;
    const result = await pool.query(
      'INSERT INTO public.degrees (degree_name) VALUES ($1) RETURNING *',
      [degree_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateDegree = async (id, degreeData) => {
  try {
    const { degree_name } = degreeData;
    const result = await pool.query(
      'UPDATE public.degrees SET degree_name = $1 WHERE id = $2 RETURNING *',
      [degree_name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteDegree = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.degrees WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
