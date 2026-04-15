import { pool } from '../../../common/connections/db-connection.js';

export const getAllWorkExperiences = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.work_experiences');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getWorkExperienceById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.work_experiences WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getWorkExperiencesByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.work_experiences WHERE profile_id = $1', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createWorkExperience = async (experienceData) => {
  try {
    const { profile_id, title, description, company, start_date, end_date } = experienceData;
    const result = await pool.query(
      'INSERT INTO public.work_experiences (profile_id, title, description, company, start_date, end_date, creation_date, update_date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [profile_id, title, description || null, company, start_date, end_date || null, new Date(), new Date()]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateWorkExperience = async (id, experienceData) => {
  try {
    const { title, description, company, start_date, end_date } = experienceData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (title !== undefined) {
      updates.push(`title = $${paramCount++}`);
      values.push(title);
    }
    if (description !== undefined) {
      updates.push(`description = $${paramCount++}`);
      values.push(description || null);
    }
    if (company !== undefined) {
      updates.push(`company = $${paramCount++}`);
      values.push(company);
    }
    if (start_date !== undefined) {
      updates.push(`start_date = $${paramCount++}`);
      values.push(start_date);
    }
    if (end_date !== undefined) {
      updates.push(`end_date = $${paramCount++}`);
      values.push(end_date || null);
    }

    updates.push(`update_date = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.work_experiences SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteWorkExperience = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.work_experiences WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
