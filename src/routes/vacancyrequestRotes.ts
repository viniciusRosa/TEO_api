import express from 'express';
const vacancyrequestRoutes = express.Router();
import { CreateVacancyrequestController }  from '../controllers/CreateVacancyrequestController';

const vacancyrequestController = new CreateVacancyrequestController;

vacancyrequestRoutes.post('/vacancyrequest', vacancyrequestController.handle)

export default vacancyrequestRoutes;
