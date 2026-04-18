import { pool } from '../../../common/connections/db-connection.js';

export const getAllForumComments = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_comments ORDER BY created_at DESC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumCommentById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_comments WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumCommentsByPostId = async (postId) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_comments WHERE post_id = $1 ORDER BY created_at DESC', [postId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumCommentsByUserId = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_comments WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createForumComment = async (forumCommentData) => {
  try {
    const { post_id, user_id, content } = forumCommentData;
    const result = await pool.query(
      `INSERT INTO public.forum_comments (post_id, user_id, content) 
      VALUES ($1, $2, $3) RETURNING *`,
      [post_id, user_id, content]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateForumComment = async (id, forumCommentData) => {
  try {
    const { content } = forumCommentData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (content !== undefined) {
      updates.push(`content = $${paramCount++}`);
      values.push(content);
    }

    if (updates.length === 0) {
      return null;
    }

    values.push(id);

    const query = `UPDATE public.forum_comments SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteForumComment = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.forum_comments WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
