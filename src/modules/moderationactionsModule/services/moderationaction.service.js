import { pool } from '../../../common/connections/db-connection.js';

export const getAllModerationActions = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.moderation_actions ORDER BY created_at DESC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getModerationActionById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.moderation_actions WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getModerationActionsByReportId = async (reportId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.moderation_actions WHERE report_id = $1 ORDER BY created_at DESC',
      [reportId]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getModerationActionsByAdminId = async (adminId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.moderation_actions WHERE admin_user_id = $1 ORDER BY created_at DESC',
      [adminId]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getModerationActionsByTargetUserId = async (targetUserId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.moderation_actions WHERE target_user_id = $1 ORDER BY created_at DESC',
      [targetUserId]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getModerationActionsByActionType = async (actionType) => {
  try {
    const result = await pool.query(
      'SELECT * FROM public.moderation_actions WHERE action_type = $1 ORDER BY created_at DESC',
      [actionType]
    );
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createModerationAction = async (moderationActionData) => {
  try {
    const { report_id, admin_user_id, target_user_id, action_type, action_notes } = moderationActionData;
    const result = await pool.query(
      `INSERT INTO public.moderation_actions (report_id, admin_user_id, target_user_id, action_type, action_notes) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [report_id, admin_user_id, target_user_id || null, action_type, action_notes || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteModerationAction = async (id) => {
  try {
    const result = await pool.query(
      'DELETE FROM public.moderation_actions WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
