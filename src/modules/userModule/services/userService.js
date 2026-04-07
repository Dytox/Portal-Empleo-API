// Importamos nuestro pool de conexiones a la BD
import { pool } from '../../../common/connections/db-connection.js';

// ======================================
// Obtener todos los usuarios
// ======================================
export const getAllUsers = async (req, res) => {
  try {
    // Ejecutamos consulta SQL
    const result = await pool.query('SELECT * FROM public.user');
    // Devolvemos los resultados en formato JSON
    res.json(result.rows);
  } catch (err) {
    // Si ocurre un error, devolvemos el mensaje de error
    res.status(500).json({ error: err.message });
  }
};

export const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const result = await pool.query('SELECT * FROM public.user WHERE email = $1', [email]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export const creatreUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await pool.query('SELECT * FROM public.user WHERE email = $1', [email]);
    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const result = await pool.query(
      'INSERT INTO public.user (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};