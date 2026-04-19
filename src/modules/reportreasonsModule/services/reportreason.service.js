import { pool } from '../../../common/connections/db-connection.js';

export const getAllReportReasons = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.report_reasons ORDER BY reason_name ASC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getReportReasonById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.report_reasons WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createReportReason = async (reportReasonData) => {
  try {
    const { reason_name } = reportReasonData;
    const result = await pool.query(
      `INSERT INTO public.report_reasons (reason_name) 
      VALUES ($1) RETURNING *`,
      [reason_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteReportReason = async (id) => {
  try {
    const result = await pool.query(
      'DELETE FROM public.report_reasons WHERE id = $1 RETURNING *',
      [id]
    );
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
