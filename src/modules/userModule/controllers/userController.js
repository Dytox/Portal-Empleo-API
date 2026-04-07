// Importamos Router desde express para crear un conjunto de rutas
import { Router } from 'express';

// Importamos los métodos que definimos en services/userService.js
import { getAllUsers, getUserByEmail, creatreUser } from '../services/userService.js';

// Creamos una instancia de Router
const userRouter = Router();

// Ruta para obtener todos los usuarios (GET /users)
userRouter.get('/users', getAllUsers);

userRouter.get('/users/:email', getUserByEmail);

userRouter.post('/users', creatreUser);

// Exportamos el router para usarlo en index.js
export default userRouter;