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
    const { user_id, company_name, phone, location, website_url, logo_url, cover_image_url, company_size_id, industry_id, additional_info_id } = profileData;
    const result = await pool.query(
      'INSERT INTO public.company_profiles (user_id, company_name, phone, location, website_url, logo_url, cover_image_url, company_size_id, industry_id, additional_info_id, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
      [user_id, company_name, phone || null, location || null, website_url || null, logo_url || null, cover_image_url || null, company_size_id || null, industry_id || null, additional_info_id || null, new Date(), new Date()]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateCompanyProfile = async (id, profileData) => {
  try {
    const { company_name, phone, location, website_url, logo_url, cover_image_url, company_size_id, industry_id, additional_info_id } = profileData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (company_name !== undefined) {
      updates.push(`company_name = $${paramCount++}`);
      values.push(company_name);
    }
    if (phone !== undefined) {
      updates.push(`phone = $${paramCount++}`);
      values.push(phone || null);
    }
    if (location !== undefined) {
      updates.push(`location = $${paramCount++}`);
      values.push(location || null);
    }
    if (website_url !== undefined) {
      updates.push(`website_url = $${paramCount++}`);
      values.push(website_url || null);
    }
    if (logo_url !== undefined) {
      updates.push(`logo_url = $${paramCount++}`);
      values.push(logo_url || null);
    }
    if (cover_image_url !== undefined) {
      updates.push(`cover_image_url = $${paramCount++}`);
      values.push(cover_image_url || null);
    }
    if (company_size_id !== undefined) {
      updates.push(`company_size_id = $${paramCount++}`);
      values.push(company_size_id || null);
    }
    if (industry_id !== undefined) {
      updates.push(`industry_id = $${paramCount++}`);
      values.push(industry_id || null);
    }
    if (additional_info_id !== undefined) {
      updates.push(`additional_info_id = $${paramCount++}`);
      values.push(additional_info_id);
    }

    updates.push(`updated_at = $${paramCount++}`);
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
