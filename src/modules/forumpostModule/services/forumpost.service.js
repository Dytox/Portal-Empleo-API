import { pool } from '../../../common/connections/db-connection.js';

export const getAllForumPosts = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_posts ORDER BY created_at DESC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumPostById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_posts WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumPostsByUserId = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_posts WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getForumPostsByCategory = async (category) => {
  try {
    const result = await pool.query('SELECT * FROM public.forum_posts WHERE category = $1 ORDER BY created_at DESC', [category]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createForumPost = async (forumPostData) => {
  try {
    const { user_id, title, content, category } = forumPostData;
    const result = await pool.query(
      `INSERT INTO public.forum_posts (user_id, title, content, category) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [user_id, title, content, category || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateForumPost = async (id, forumPostData) => {
  try {
    const { title, content, category } = forumPostData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (title !== undefined) {
      updates.push(`title = $${paramCount++}`);
      values.push(title);
    }
    if (content !== undefined) {
      updates.push(`content = $${paramCount++}`);
      values.push(content);
    }
    if (category !== undefined) {
      updates.push(`category = $${paramCount++}`);
      values.push(category || null);
    }

    if (updates.length === 0) {
      return null;
    }

    updates.push(`updated_at = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    const query = `UPDATE public.forum_posts SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteForumPost = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.forum_posts WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
