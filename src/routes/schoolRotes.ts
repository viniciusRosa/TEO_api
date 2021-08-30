import express from 'express';
const schoolRoutes = express.Router();

import { CreateSchoolController } from '../controllers/CreateSchoolController'
const createSchoolController = new CreateSchoolController();

import { GetSchoolsController } from '../controllers/GetSchoolsController';
const getSchoolsController = new GetSchoolsController();

import { GetSchoolController } from '../controllers/GetSchoolController';
const getSchoolController = new GetSchoolController();

import { UpdateSchoolController } from '../controllers/UpdateSchoolController';
const updateSchoolController = new UpdateSchoolController();

import { DeleteSchoolController } from '../controllers/DeleteSchoolController';
const deleteSchoolController = new DeleteSchoolController()

schoolRoutes.get('/schools', getSchoolsController.handle);
schoolRoutes.get('/schools/:id', getSchoolController.handle);
schoolRoutes.post('/schools', createSchoolController.handle);
schoolRoutes.put('/schools/:id', updateSchoolController.handle);
schoolRoutes.delete('/schools/:id', deleteSchoolController.handle);


export default schoolRoutes;
