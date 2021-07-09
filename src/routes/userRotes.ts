import express from 'express';
const userRoutes = express.Router();
import { CreateUserController}  from '../controllers/CreateUserController';

const createUserController = new CreateUserController;

userRoutes.post('/users', createUserController.handle)

export default userRoutes;
