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
    const { profile_id, job_title, description, company_name, start_date, end_date, is_current } = experienceData;
    const result = await pool.query(
      'INSERT INTO public.work_experiences (profile_id, job_title, description, company_name, start_date, end_date, is_current, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [profile_id, job_title, description || null, company_name, start_date, end_date || null, is_current || false, new Date(), new Date()]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateWorkExperience = async (id, experienceData) => {
  try {
    const { job_title, description, company_name, start_date, end_date, is_current } = experienceData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (job_title !== undefined) {
      updates.push(`job_title = $${paramCount++}`);
      values.push(job_title);
    }
    if (description !== undefined) {
      updates.push(`description = $${paramCount++}`);
      values.push(description || null);
    }
    if (company_name !== undefined) {
      updates.push(`company_name = $${paramCount++}`);
      values.push(company_name);
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
