import { pool } from '../../../common/connections/db-connection.js';

export const getAllSavedJobs = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.saved_jobs');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getSavedJobById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.saved_jobs WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getSavedJobsByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.saved_jobs WHERE profile_id = $1', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createSavedJob = async (savedJobData) => {
  try {
    const { profile_id, job_post_id } = savedJobData;
    const result = await pool.query(
      `INSERT INTO public.saved_jobs (profile_id, job_post_id) 
      VALUES ($1, $2) RETURNING *`,
      [profile_id, job_post_id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteSavedJob = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.saved_jobs WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteSavedJobByProfileAndJob = async (profileId, jobPostId) => {
  try {
    const result = await pool.query(
      'DELETE FROM public.saved_jobs WHERE profile_id = $1 AND job_post_id = $2 RETURNING *',
      [profileId, jobPostId]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
