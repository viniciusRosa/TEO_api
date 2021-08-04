import express from 'express';
const vacancyrequestRoutes = express.Router();
import { CreateVacancyrequestController }  from '../controllers/CreateVacancyrequestController';
import { GetVacancyrequestListController }  from '../controllers/GetVacancyrequestListController';
import { GetVacancyrequestController }  from '../controllers/GetVacancyrequestController';

const createVacancyrequestController = new CreateVacancyrequestController;
const getVacancyrequestListController = new GetVacancyrequestListController;
const getVacancyrequestController = new GetVacancyrequestController;

vacancyrequestRoutes.post('/vacancyrequest', createVacancyrequestController.handle)
vacancyrequestRoutes.get('/vacancyrequest/:status', getVacancyrequestListController.handle)
vacancyrequestRoutes.get('/vacancyrequest/student/:id', getVacancyrequestController.handle)

// vacancyrequestRoutes.get('/vacancyrequest/', (req, res) => {
//   console.log(req.params)
//   res.send(req)
// })


export default vacancyrequestRoutes;
