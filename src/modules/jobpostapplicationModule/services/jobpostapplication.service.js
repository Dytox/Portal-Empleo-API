import { pool } from '../../../common/connections/db-connection.js';

export const getAllApplications = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.job_post_applications');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getApplicationById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_post_applications WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getApplicationsByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_post_applications WHERE profile_id = $1', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getApplicationsByJobPostId = async (jobPostId) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_post_applications WHERE job_post_id = $1', [jobPostId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createApplication = async (applicationData) => {
  try {
    const { profile_id, job_post_id, application_status, notes } = applicationData;
    const result = await pool.query(
      `INSERT INTO public.job_post_applications 
      (profile_id, job_post_id, application_status, notes) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [profile_id, job_post_id, application_status || 'submitted', notes || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateApplication = async (id, applicationData) => {
  try {
    const { application_status, notes } = applicationData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (application_status !== undefined) {
      updates.push(`application_status = $${paramCount++}`);
      values.push(application_status);
    }
    if (notes !== undefined) {
      updates.push(`notes = $${paramCount++}`);
      values.push(notes || null);
    }

    if (updates.length === 0) {
      return null;
    }

    values.push(id);

    const query = `UPDATE public.job_post_applications SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteApplication = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.job_post_applications WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
