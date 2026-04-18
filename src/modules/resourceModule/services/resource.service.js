import { pool } from '../../../common/connections/db-connection.js';

export const getAllResources = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.resources ORDER BY created_at DESC');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getResourceById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.resources WHERE id = $1', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getResourcesByType = async (resourceType) => {
  try {
    const result = await pool.query('SELECT * FROM public.resources WHERE resource_type = $1 ORDER BY created_at DESC', [resourceType]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createResource = async (resourceData) => {
  try {
    const { title, description, resource_type, url, image_url } = resourceData;
    const result = await pool.query(
      `INSERT INTO public.resources (title, description, resource_type, url, image_url) 
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [title, description || null, resource_type || null, url, image_url || null]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateResource = async (id, resourceData) => {
  try {
    const { title, description, resource_type, url, image_url } = resourceData;
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
    if (resource_type !== undefined) {
      updates.push(`resource_type = $${paramCount++}`);
      values.push(resource_type || null);
    }
    if (url !== undefined) {
      updates.push(`url = $${paramCount++}`);
      values.push(url);
    }
    if (image_url !== undefined) {
      updates.push(`image_url = $${paramCount++}`);
      values.push(image_url || null);
    }

    if (updates.length === 0) {
      return null;
    }

    values.push(id);

    const query = `UPDATE public.resources SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteResource = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.resources WHERE id = $1 RETURNING *', [id]);
    return result.rows[0] || null;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
