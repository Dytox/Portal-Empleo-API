import { pool } from '../../../common/connections/db-connection.js';

export const getAllCompanyReviews = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.company_reviews ORDER BY created_at DESC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getCompanyReviewById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.company_reviews WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getCompanyReviewsByCompanyId = async (companyProfileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.company_reviews WHERE company_profile_id = $1 ORDER BY created_at DESC', [companyProfileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getCompanyReviewsByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.company_reviews WHERE profile_id = $1 ORDER BY created_at DESC', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createCompanyReview = async (reviewData) => {
  try {
    const { profile_id, company_profile_id, rating, comment } = reviewData;
    const result = await pool.query(
      `INSERT INTO public.company_reviews (profile_id, company_profile_id, rating, comment) 
      VALUES ($1, $2, $3, $4) RETURNING *`,
      [profile_id, company_profile_id, rating, comment || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateCompanyReview = async (id, reviewData) => {
  try {
    const { rating, comment } = reviewData;
    const updates = [];
    const values = [];
    let paramCount = 1;

    if (rating !== undefined) {
      updates.push(`rating = $${paramCount++}`);
      values.push(rating);
    }
    if (comment !== undefined) {
      updates.push(`comment = $${paramCount++}`);
      values.push(comment || null);
    }

    if (updates.length === 0) {
      return null;
    }

    values.push(id);

    const query = `UPDATE public.company_reviews SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteCompanyReview = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.company_reviews WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
