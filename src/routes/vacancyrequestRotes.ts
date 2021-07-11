import express from 'express';
const vacancyrequestRoutes = express.Router();
import { CreateVacancyrequestController }  from '../controllers/CreateVacancyrequestController';
import { GetVacancyrequestListController }  from '../controllers/GetVacancyrequestListController';
import { GetVacancyrequestController }  from '../controllers/GetVacancyrequestController';

const createVacancyrequestController = new CreateVacancyrequestController;
const getVacancyrequestListController = new GetVacancyrequestListController;
const getVacancyrequestController = new GetVacancyrequestController;

vacancyrequestRoutes.post('/vacancyrequest', createVacancyrequestController.handle)
vacancyrequestRoutes.get('/vacancyrequest', getVacancyrequestListController.handle)
vacancyrequestRoutes.get('/vacancyrequest/:id', getVacancyrequestController.handle)


export default vacancyrequestRoutes;
