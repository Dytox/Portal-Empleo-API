import { pool } from '../../../common/connections/db-connection.js';

export const getAllSkills = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.skills');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getSkillById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.skills WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createSkill = async (skillData) => {
  try {
    const { id, skill_name } = skillData;
    const result = await pool.query(
      'INSERT INTO public.skills (id, skill_name) VALUES ($1, $2) RETURNING *',
      [id, skill_name]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const updateSkill = async (id, skillData) => {
  try {
    const { skill_name } = skillData;
    const result = await pool.query(
      'UPDATE public.skills SET skill_name = $1 WHERE id = $2 RETURNING *',
      [skill_name, id]
    );
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteSkill = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.skills WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

// Profile Skills
export const getAllProfileSkills = async () => {
  try {
    const result = await pool.query('SELECT * FROM public.profile_skills');
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getProfileSkillById = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM public.profile_skills WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const getProfileSkillsByProfileId = async (profileId) => {
  try {
    const result = await pool.query('SELECT * FROM public.profile_skills WHERE profile_id = $1', [profileId]);
    return result.rows;
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const createProfileSkill = async (profileSkillData) => {
  try {
    const { profile_id, skill_id } = profileSkillData;
    const result = await pool.query(
      'INSERT INTO public.profile_skills (profile_id, skill_id) VALUES ($1, $2) RETURNING *',
      [profile_id, skill_id]
    );
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};

export const deleteProfileSkill = async (id) => {
  try {
    const result = await pool.query('DELETE FROM public.profile_skills WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return result.rows[0];
  } catch (err) {
    throw new Error(`Database error: ${err.message}`);
  }
};
