import express from 'express';
import { CreateUserController }  from '../controllers/CreateUserController';
import { GetUsersController } from '../controllers/GetUsersController';
import { GetUserController } from '../controllers/GetUserController';

const userRoutes = express.Router();

const createUserController = new CreateUserController;
const getUsersController = new GetUsersController;
const getUserController = new GetUserController;


userRoutes.get('/users', getUsersController.handle);
userRoutes.get('/users/:id', getUserController.handle);
userRoutes.post('/users', createUserController.handle);

export default userRoutes;
