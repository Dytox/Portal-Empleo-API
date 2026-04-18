import { pool } from '../../../common/connections/db-connection.js';

export const getAllNotifications = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.notifications ORDER BY created_at DESC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getNotificationById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.notifications WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getNotificationsByUserId = async (userId) => {
  try {
    const result = await pool.query('SELECT * FROM public.notifications WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createNotification = async (notificationData) => {
  try {
    const { user_id, title, message, is_read } = notificationData;
    const result = await pool.query(
      `INSERT INTO public.notifications (user_id, title, message, is_read) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [user_id, title, message, is_read || false]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateNotification = async (id, notificationData) => {
  try {
    const { is_read } = notificationData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (is_read !== undefined) {
      updates.push(`is_read = $${paramCount++}`);
      values.push(is_read);
    }

    if (updates.length === 0) {
      return null;
    }

    values.push(id);

    const query = `UPDATE public.notifications SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteNotification = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.notifications WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const markAsRead = async (id) => {
  try {
    const result = await pool.query('UPDATE public.notifications SET is_read = true WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const markAllAsReadByUserId = async (userId) => {
  try {
    const result = await pool.query('UPDATE public.notifications SET is_read = true WHERE user_id = $1 RETURNING *', [userId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
