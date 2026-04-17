import { pool } from '../../../common/connections/db-connection.js';

export const getAllExperienceRequiredTimelapses = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.experience_required_timelapses');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getExperienceRequiredTimelapsesById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.experience_required_timelapses WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createExperienceRequiredTimelapses = async (timelapsesData) => {
  try {
    const { id, experience_timelapse_name } = timelapsesData;
    const result = await pool.query(
      'INSERT INTO public.experience_required_timelapses (id, experience_timelapse_name) VALUES ($1, $2) RETURNING *',
      [id, experience_timelapse_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateExperienceRequiredTimelapses = async (id, timelapsesData) => {
  try {
    const { experience_timelapse_name } = timelapsesData;
    const result = await pool.query(
      'UPDATE public.experience_required_timelapses SET experience_timelapse_name = $1 WHERE id = $2 RETURNING *',
      [experience_timelapse_name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteExperienceRequiredTimelapses = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.experience_required_timelapses WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
