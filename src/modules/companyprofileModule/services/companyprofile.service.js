import { pool } from '../../../common/connections/db-connection.js';

export const getAllCompanyProfiles = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.company_profiles');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getCompanyProfileById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.company_profiles WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getCompanyProfileByUserId = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM public.company_profiles WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createCompanyProfile = async (profileData) => {
  try {
    const { user_id, company_name, tel, external_links_id, additional_info_id } = profileData;
    const result = await pool.query(
      'INSERT INTO public.company_profiles (user_id, company_name, tel, external_links_id, additional_info_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, company_name, tel || null, external_links_id, additional_info_id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateCompanyProfile = async (id, profileData) => {
  try {
    const { company_name, tel, external_links_id, additional_info_id } = profileData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (company_name !== undefined) {
      updates.push(`company_name = $${paramCount++}`);
      values.push(company_name);
    }
    if (tel !== undefined) {
      updates.push(`tel = $${paramCount++}`);
      values.push(tel || null);
    }
    if (external_links_id !== undefined) {
      updates.push(`external_links_id = $${paramCount++}`);
      values.push(external_links_id);
    }
    if (additional_info_id !== undefined) {
      updates.push(`additional_info_id = $${paramCount++}`);
      values.push(additional_info_id);
    }

    updates.push(`update_date = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.company_profiles SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteCompanyProfile = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.company_profiles WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
