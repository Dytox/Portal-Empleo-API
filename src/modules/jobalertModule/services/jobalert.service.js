import { pool } from '../../../common/connections/db-connection.js';

export const getAllJobAlerts = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.job_alerts');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getJobAlertById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_alerts WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getJobAlertsByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_alerts WHERE profile_id = $1', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createJobAlert = async (jobAlertData) => {
  try {
    const { profile_id, keywords, remote, onsite, hybrid, is_active } = jobAlertData;
    const result = await pool.query(
      `INSERT INTO public.job_alerts 
      (profile_id, keywords, remote, onsite, hybrid, is_active) 
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [profile_id, keywords || null, remote || false, onsite || false, hybrid || false, is_active !== false]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateJobAlert = async (id, jobAlertData) => {
  try {
    const { keywords, remote, onsite, hybrid, is_active } = jobAlertData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (keywords !== undefined) {
      updates.push(`keywords = $${paramCount++}`);
      values.push(keywords || null);
    }
    if (remote !== undefined) {
      updates.push(`remote = $${paramCount++}`);
      values.push(remote);
    }
    if (onsite !== undefined) {
      updates.push(`onsite = $${paramCount++}`);
      values.push(onsite);
    }
    if (hybrid !== undefined) {
      updates.push(`hybrid = $${paramCount++}`);
      values.push(hybrid);
    }
    if (is_active !== undefined) {
      updates.push(`is_active = $${paramCount++}`);
      values.push(is_active);
    }

    if (updates.length === 0) {
      return null;
    }

    updates.push(`updated_at = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    const query = `UPDATE public.job_alerts SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteJobAlert = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.job_alerts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
