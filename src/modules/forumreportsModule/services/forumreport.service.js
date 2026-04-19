import { pool } from '../../../common/connections/db-connection.js';

export const getAllForumReports = async () => {
  try {
    const result = await pool.query(
      `SELECT * FROM public.forum_reports ORDER BY created_at DESC`
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumReportById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_reports WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumReportsByReporterId = async (reporterId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.forum_reports WHERE reporter_user_id = $1 ORDER BY created_at DESC',
      [reporterId]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumReportsByStatus = async (status) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.forum_reports WHERE status = $1 ORDER BY created_at DESC',
      [status]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumReportsByPostId = async (postId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.forum_reports WHERE post_id = $1 ORDER BY created_at DESC',
      [postId]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumReportsByCommentId = async (commentId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.forum_reports WHERE comment_id = $1 ORDER BY created_at DESC',
      [commentId]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createForumReport = async (forumReportData) => {
  try {
    const { reporter_user_id, post_id, comment_id, reason_id, details } = forumReportData;
    const result = await pool.query(
      `INSERT INTO public.forum_reports (reporter_user_id, post_id, comment_id, reason_id, details) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [reporter_user_id, post_id || null, comment_id || null, reason_id, details || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateForumReport = async (id, forumReportData) => {
  try {
    const { status, review_notes, reviewed_by_user_id } = forumReportData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (status !== undefined) {
      updates.push(`status = $${paramCount++}`);
      values.push(status);
    }
    if (review_notes !== undefined) {
      updates.push(`review_notes = $${paramCount++}`);
      values.push(review_notes);
    }
    if (reviewed_by_user_id !== undefined) {
      updates.push(`reviewed_by_user_id = $${paramCount++}`);
      values.push(reviewed_by_user_id);
    }
    if (status !== undefined || review_notes !== undefined || reviewed_by_user_id !== undefined) {
      updates.push(`reviewed_at = CURRENT_TIMESTAMP`);
    }

    if (updates.length === 0) {
      const result = await pool.query('SELECT * FROM public.forum_reports WHERE id = $1', [id]);
      return result.rows[0] || null;
    }

    values.push(id);
    const query = `UPDATE public.forum_reports SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteForumReport = async (id) => {
  try {
    const result = await pool.query(
      'DELETE FROM public.forum_reports WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
