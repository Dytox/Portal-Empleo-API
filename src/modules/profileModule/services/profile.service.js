import { pool } from '../../../common/connections/db-connection.js';

export const getAllProfiles = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.profile');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getProfileById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.profile WHERE id = $1', [id]);
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
    const result = await pool.query('SELECT * FROM public.profile WHERE user_id = $1', [userId]);
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
    const { user_id, name, last_name, tel, external_link, cv_uri, about_me } = profileData;
    const result = await pool.query(
      'INSERT INTO public.profile (user_id, name, last_name, tel, external_link, cv_uri, about_me) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [user_id, name, last_name, tel || null, external_link || null, cv_uri || null, about_me || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateProfile = async (id, profileData) => {
  try {
    const { name, last_name, tel, external_link, cv_uri, about_me } = profileData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (name !== undefined) {
      updates.push(`name = $${paramCount++}`);
      values.push(name);
    }
    if (last_name !== undefined) {
      updates.push(`last_name = $${paramCount++}`);
      values.push(last_name);
    }
    if (tel !== undefined) {
      updates.push(`tel = $${paramCount++}`);
      values.push(tel || null);
    }
    if (external_link !== undefined) {
      updates.push(`external_link = $${paramCount++}`);
      values.push(external_link || null);
    }
    if (cv_uri !== undefined) {
      updates.push(`cv_uri = $${paramCount++}`);
      values.push(cv_uri || null);
    }
    if (about_me !== undefined) {
      updates.push(`about_me = $${paramCount++}`);
      values.push(about_me || null);
    }

    updates.push(`update_date = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.profile SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
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
    const result = await pool.query('DELETE FROM public.profile WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
