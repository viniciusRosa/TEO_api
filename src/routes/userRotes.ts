import express from 'express';
import { CreateUserController}  from '../controllers/CreateUserController';

const userRoutes = express.Router();

const createUserController = new CreateUserController;

userRoutes.post('/users', createUserController.handle)

export default userRoutes;
