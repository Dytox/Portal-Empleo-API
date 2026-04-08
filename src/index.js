
import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import userRouter from './modules/userModule/controllers/userController.js';
import { swaggerUi, swaggerSpec } from './common/swagger.js';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo UNICAES! El servidor está funcionando correctamente.');
});

app.use(userRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor corriendo en http://localhost:${process.env.PORT || 3000}`);
});