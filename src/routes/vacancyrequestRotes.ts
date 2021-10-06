import express from 'express';
import { CreateVacancyrequestController }  from '../controllers/CreateVacancyrequestController';
import { GetVacancyrequestListController }  from '../controllers/GetVacancyrequestListController';
import { GetVacancyrequestController }  from '../controllers/GetVacancyrequestController';
import { UpdateVacancyStatusController } from '../controllers/UpdateVacancyStatusController';
const vacancyrequestRoutes = express.Router();

const createVacancyrequestController = new CreateVacancyrequestController;
const getVacancyrequestListController = new GetVacancyrequestListController;
const getVacancyrequestController = new GetVacancyrequestController;
const updateVacancyStatusController = new UpdateVacancyStatusController;

vacancyrequestRoutes.post('/vacancyrequest', createVacancyrequestController.handle)
vacancyrequestRoutes.get('/vacancyrequest/:status', getVacancyrequestListController.handle)
vacancyrequestRoutes.get('/vacancyrequest/student/:id', getVacancyrequestController.handle)
vacancyrequestRoutes.put('/vacancyrequest/:id', updateVacancyStatusController.handle)

export default vacancyrequestRoutes;
