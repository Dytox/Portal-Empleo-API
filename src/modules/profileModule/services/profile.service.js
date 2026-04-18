import { pool } from '../../../common/connections/db-connection.js';

export const getAllProfiles = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.profiles');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getProfileById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.profiles WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getProfileByUserId = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM public.profiles WHERE user_id = $1', [userId]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createProfile = async (profileData) => {
  try {
    const { user_id, first_name, last_name, phone, location, external_link, cv_url, profile_image_url, about_me, professional_title } = profileData;
    const result = await pool.query(
      `INSERT INTO public.profiles 
      (user_id, first_name, last_name, phone, location, external_link, cv_url, profile_image_url, about_me, professional_title) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [user_id, first_name, last_name, phone || null, location || null, external_link || null, cv_url || null, profile_image_url || null, about_me || null, professional_title || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateProfile = async (id, profileData) => {
  try {
    const { first_name, last_name, phone, location, external_link, cv_url, profile_image_url, about_me, professional_title } = profileData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (first_name !== undefined) {
      updates.push(`first_name = $${paramCount++}`);
      values.push(first_name);
    }
    if (last_name !== undefined) {
      updates.push(`last_name = $${paramCount++}`);
      values.push(last_name);
    }
    if (phone !== undefined) {
      updates.push(`phone = $${paramCount++}`);
      values.push(phone || null);
    }
    if (location !== undefined) {
      updates.push(`location = $${paramCount++}`);
      values.push(location || null);
    }
    if (external_link !== undefined) {
      updates.push(`external_link = $${paramCount++}`);
      values.push(external_link || null);
    }
    if (cv_url !== undefined) {
      updates.push(`cv_url = $${paramCount++}`);
      values.push(cv_url || null);
    }
    if (profile_image_url !== undefined) {
      updates.push(`profile_image_url = $${paramCount++}`);
      values.push(profile_image_url || null);
    }
    if (about_me !== undefined) {
      updates.push(`about_me = $${paramCount++}`);
      values.push(about_me || null);
    }
    if (professional_title !== undefined) {
      updates.push(`professional_title = $${paramCount++}`);
      values.push(professional_title || null);
    }

    updates.push(`updated_at = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.profiles SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteProfile = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.profiles WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
