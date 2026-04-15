import { pool } from '../../../common/connections/db-connection.js';

export const getAllAdditionalInfo = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.additional_info');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getAdditionalInfoById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.additional_info WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createAdditionalInfo = async (infoData) => {
  try {
    const { about_company, company_size_id, industry_id, mision, vision, culture } = infoData;
    const result = await pool.query(
      'INSERT INTO public.additional_info (about_company, company_size_id, industry_id, mision, vision, culture) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [about_company || null, company_size_id, industry_id, mision || null, vision || null, culture || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateAdditionalInfo = async (id, infoData) => {
  try {
    const { about_company, company_size_id, industry_id, mision, vision, culture } = infoData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (about_company !== undefined) {
      updates.push(`about_company = $${paramCount++}`);
      values.push(about_company || null);
    }
    if (company_size_id !== undefined) {
      updates.push(`company_size_id = $${paramCount++}`);
      values.push(company_size_id);
    }
    if (industry_id !== undefined) {
      updates.push(`industry_id = $${paramCount++}`);
      values.push(industry_id);
    }
    if (mision !== undefined) {
      updates.push(`mision = $${paramCount++}`);
      values.push(mision || null);
    }
    if (vision !== undefined) {
      updates.push(`vision = $${paramCount++}`);
      values.push(vision || null);
    }
    if (culture !== undefined) {
      updates.push(`culture = $${paramCount++}`);
      values.push(culture || null);
    }

    updates.push(`update_date = $${paramCount++}`);
    values.push(new Date());

    values.push(id);

    if (updates.length === 1) {
      return null;
    }

    const query = `UPDATE public.additional_info SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteAdditionalInfo = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.additional_info WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
