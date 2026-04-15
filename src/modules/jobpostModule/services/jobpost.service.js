import { pool } from '../../../common/connections/db-connection.js';

export const getAllJobPosts = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.job_posts');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getJobPostById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_posts WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getJobPostsByCompanyId = async (companyId) => {
  try {
    const result = await pool.query('SELECT * FROM public.job_posts WHERE company_id = $1', [companyId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createJobPost = async (postData) => {
  try {
    const { company_id, title, description, experience_required_timelapse_id, min_salary, max_salary, status_id } = postData;
    const result = await pool.query(
      'INSERT INTO public.job_posts (company_id, title, description, experience_required_timelapse_id, min_salary, max_salary, status_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [company_id, title, description || null, experience_required_timelapse_id, min_salary || null, max_salary || null, status_id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateJobPost = async (id, postData) => {
  try {
    const { title, description, experience_required_timelapse_id, min_salary, max_salary, status_id } = postData;
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
    if (experience_required_timelapse_id !== undefined) {
      updates.push(`experience_required_timelapse_id = $${paramCount++}`);
      values.push(experience_required_timelapse_id);
    }
    if (min_salary !== undefined) {
      updates.push(`min_salary = $${paramCount++}`);
      values.push(min_salary || null);
    }
    if (max_salary !== undefined) {
      updates.push(`max_salary = $${paramCount++}`);
      values.push(max_salary || null);
    }
    if (status_id !== undefined) {
      updates.push(`status_id = $${paramCount++}`);
      values.push(status_id);
    }

    updates.push(`update_date = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.job_posts SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteJobPost = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.job_posts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
