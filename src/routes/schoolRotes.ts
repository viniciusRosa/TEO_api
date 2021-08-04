import express from 'express';
const schoolRoutes = express.Router();

import { CreateSchoolController } from '../controllers/CreateSchoolController'
const createSchoolController = new CreateSchoolController();

import { GetSchoolsController } from '../controllers/GetSchoolsController';
const getSchoolsController = new GetSchoolsController();

import { GetSchoolController } from '../controllers/GetSchoolController';
const getSchoolController = new GetSchoolController();

schoolRoutes.get('/schools', getSchoolsController.handle)
schoolRoutes.get('/schools/:id', getSchoolController.handle)


schoolRoutes.post('/schools', createSchoolController.handle)

export default schoolRoutes;
