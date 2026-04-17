import { pool } from '../../../common/connections/db-connection.js';

export const getAllExternalCompanyLinks = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.external_company_links');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getExternalCompanyLinksById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.external_company_links WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createExternalCompanyLinks = async (linksData) => {
  try {
    const { id, link } = linksData;
    const result = await pool.query(
      'INSERT INTO public.external_company_links (id, link) VALUES ($1, $2) RETURNING *',
      [id, link]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateExternalCompanyLinks = async (id, linksData) => {
  try {
    const { link } = linksData;
    const result = await pool.query(
      'UPDATE public.external_company_links SET link = $1 WHERE id = $2 RETURNING *',
      [link, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteExternalCompanyLinks = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.external_company_links WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
