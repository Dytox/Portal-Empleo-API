
import { Router } from 'express';
import { getAllUsers, getUserByEmail, creatreUser } from '../services/userService.js';

const userRouter = Router();

userRouter.get('/users', getAllUsers);

userRouter.get('/users/:email', (req, res) => {
  try {
    getUserDTO.parse(req.params);
    return getUserByEmail(req, res);
  } catch (err) {
    return res.status(400).json({ error: err.errors ?? err.message });
  }
});

userRouter.post('/users', (req, res) => {
  try {
    req.body = createUserDTO.parse(req.body);
    return creatreUser(req, res);
  } catch (err) {
    return res.status(400).json({ error: err.errors ?? err.message });
  }
});

export default userRouter;