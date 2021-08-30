import express from 'express';
import { CreatePointController } from '../controllers/CreatePointController';
import { GetPointsController } from '../controllers/GetPointsController';

const pointRoutes = express.Router();

const createPointController = new CreatePointController();
const getPointscontroller = new GetPointsController();

pointRoutes.post('/points', createPointController.handle);
pointRoutes.get('/points', getPointscontroller.handle);


export default pointRoutes;
