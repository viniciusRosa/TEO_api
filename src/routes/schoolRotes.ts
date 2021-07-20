import express from 'express';
const schoolRoutes = express.Router();

import { CreateSchoolController } from '../controllers/CreateSchoolController'
const createSchoolController = new CreateSchoolController();

// schoolRoutes.get('/schools', createSchoolController.index)

schoolRoutes.post('/schools', createSchoolController.handle)

export default schoolRoutes;
