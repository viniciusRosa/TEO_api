import express from 'express';
import { CreateUserController }  from '../controllers/CreateUserController';
import { GetUsersController } from '../controllers/GetUsersController';
import { GetUserController } from '../controllers/GetUserController';
import { UpdateUserController } from '../controllers/UpdateUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';

const userRoutes = express.Router();

const createUserController = new CreateUserController;
const getUsersController = new GetUsersController;
const getUserController = new GetUserController;
const updateUserController = new UpdateUserController;
const deleteUserController = new DeleteUserController;

userRoutes.post('/users', createUserController.handle);
userRoutes.get('/users', getUsersController.handle);
userRoutes.get('/users/:id', getUserController.handle);
userRoutes.put('/users/:id', updateUserController.handle);
userRoutes.delete('/users/:id', deleteUserController.handle);

// userRoutes.put('/users/activity/:id', updateUserController.handleActivity);


export default userRoutes;
