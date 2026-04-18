import { pool } from '../../../common/connections/db-connection.js';

export const getAllCompanySizes = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.company_sizes');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getCompanySizeById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.company_sizes WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createCompanySize = async (sizeData) => {
  try {
    const { id, size_name } = sizeData;
    const result = await pool.query(
      'INSERT INTO public.company_sizes (id, size_name) VALUES ($1, $2) RETURNING *',
      [id, size_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateCompanySize = async (id, sizeData) => {
  try {
    const { size_name } = sizeData;
    const result = await pool.query(
      'UPDATE public.company_sizes SET size_name = $1 WHERE id = $2 RETURNING *',
      [size_name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteCompanySize = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.company_sizes WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
