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
    const { company_profile_id, link_type, link_url } = linksData;
    const result = await pool.query(
      'INSERT INTO public.external_company_links (company_profile_id, link_type, link_url, created_at) VALUES ($1, $2, $3, $4) RETURNING *',
      [company_profile_id, link_type, link_url, new Date()]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateExternalCompanyLinks = async (id, linksData) => {
  try {
    const { link_type, link_url } = linksData;
    const result = await pool.query(
      'UPDATE public.external_company_links SET link_type = $1, link_url = $2 WHERE id = $3 RETURNING *',
      [link_type, link_url, id]
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
