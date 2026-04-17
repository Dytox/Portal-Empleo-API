import { pool } from '../../../common/connections/db-connection.js';

export const getAllIndustries = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.industries');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getIndustryById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.industries WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createIndustry = async (industryData) => {
  try {
    const { id, industry_name } = industryData;
    const result = await pool.query(
      'INSERT INTO public.industries (id, industry_name) VALUES ($1, $2) RETURNING *',
      [id, industry_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateIndustry = async (id, industryData) => {
  try {
    const { industry_name } = industryData;
    const result = await pool.query(
      'UPDATE public.industries SET industry_name = $1 WHERE id = $2 RETURNING *',
      [industry_name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteIndustry = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.industries WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
