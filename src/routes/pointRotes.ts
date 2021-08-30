import express from 'express';
import { CreatePointController } from '../controllers/CreatePointController';
import { GetPointsController } from '../controllers/GetPointsController';
import { GetPointController } from '../controllers/GetPointController';

const pointRoutes = express.Router();

const createPointController = new CreatePointController();
const getPointscontroller = new GetPointsController();
const getPointcontroller = new GetPointController();

pointRoutes.post('/points', createPointController.handle);
pointRoutes.get('/points', getPointscontroller.handle);
pointRoutes.get('/points/:id', getPointcontroller.handle);

export default pointRoutes;
