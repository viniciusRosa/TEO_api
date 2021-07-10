import express from 'express';
const vacancyrequestRoutes = express.Router();
import { CreateVacancyrequestController }  from '../controllers/CreateVacancyrequestController';
import { GetVacancyrequestController }  from '../controllers/GetVacancyrequestController';


const createVacancyrequestController = new CreateVacancyrequestController;
const getVacancyrequestController = new GetVacancyrequestController;


vacancyrequestRoutes.post('/vacancyrequest', createVacancyrequestController.handle)
vacancyrequestRoutes.get('/vacancyrequest', getVacancyrequestController.handle)


export default vacancyrequestRoutes;
