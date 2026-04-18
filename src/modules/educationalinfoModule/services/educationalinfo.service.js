import { pool } from '../../../common/connections/db-connection.js';

export const getAllEducationalInfo = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.educational_info');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getEducationalInfoById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.educational_info WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getEducationalInfoByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.educational_info WHERE profile_id = $1', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createEducationalInfo = async (infoData) => {
  try {
    const { profile_id, degree_id, institution, custom_degree_name, start_date, end_date, is_current } = infoData;
    const result = await pool.query(
      'INSERT INTO public.educational_info (profile_id, degree_id, institution, custom_degree_name, start_date, end_date, is_current, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [profile_id, degree_id || null, institution, custom_degree_name || null, start_date, end_date || null, is_current || false, new Date()]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateEducationalInfo = async (id, infoData) => {
  try {
    const { degree_id, institution, custom_degree_name, start_date, end_date, is_current } = infoData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (degree_id !== undefined) {
      updates.push(`degree_id = $${paramCount++}`);
      values.push(degree_id);
    }
    if (institution !== undefined) {
      updates.push(`institution = $${paramCount++}`);
      values.push(institution);
    }
    if (custom_degree_name !== undefined) {
      updates.push(`custom_degree_name = $${paramCount++}`);
      values.push(custom_degree_name || null);
    }
    if (start_date !== undefined) {
      updates.push(`start_date = $${paramCount++}`);
      values.push(start_date);
    }
    if (end_date !== undefined) {
      updates.push(`end_date = $${paramCount++}`);
      values.push(end_date || null);
    }
    if (is_current !== undefined) {
      updates.push(`is_current = $${paramCount++}`);
      values.push(is_current);
    }

    updates.push(`updated_at = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.educational_info SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteEducationalInfo = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.educational_info WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
