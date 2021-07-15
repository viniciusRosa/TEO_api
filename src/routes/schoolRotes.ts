import express from 'express';
const schoolRoutes = express.Router();

import { CreateSchoolController } from '../controllers/CreateSchoolController'
const createSchoolController = new CreateSchoolController();

import FilesController from '../controllers/FilesController';
const filesController = new FilesController;


// schoolRoutes.get('/schools', createSchoolController.index)

// schoolRoutes.get('/schools/:id', schoolController.show);

schoolRoutes.post('/schools', createSchoolController.handle)

// schoolRoutes.put('/schools/:id' schoolController.update);

// schoolRoutes.delete('/schools/:id', schoolController.delete);

export default schoolRoutes;
