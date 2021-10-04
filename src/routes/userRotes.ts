import express from 'express';
import { CreateUserController }  from '../controllers/CreateUserController';
import { GetUsersController } from '../controllers/GetUsersController';

const userRoutes = express.Router();

const createUserController = new CreateUserController;
const getUsersController = new GetUsersController;

userRoutes.get('/users', getUsersController.handle);
userRoutes.post('/users', createUserController.handle);

export default userRoutes;
