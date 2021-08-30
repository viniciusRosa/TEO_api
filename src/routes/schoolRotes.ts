import express from 'express';
import { CreateSchoolController } from '../controllers/CreateSchoolController'
import { GetSchoolsController } from '../controllers/GetSchoolsController';
import { GetSchoolController } from '../controllers/GetSchoolController';
import { UpdateSchoolController } from '../controllers/UpdateSchoolController';
import { DeleteSchoolController } from '../controllers/DeleteSchoolController';

const schoolRoutes = express.Router();

const createSchoolController = new CreateSchoolController();
const getSchoolsController = new GetSchoolsController();
const getSchoolController = new GetSchoolController();
const updateSchoolController = new UpdateSchoolController();
const deleteSchoolController = new DeleteSchoolController()

schoolRoutes.post('/schools', createSchoolController.handle);
schoolRoutes.get('/schools', getSchoolsController.handle);
schoolRoutes.get('/schools/:id', getSchoolController.handle);
schoolRoutes.put('/schools/:id', updateSchoolController.handle);
schoolRoutes.delete('/schools/:id', deleteSchoolController.handle);


export default schoolRoutes;
