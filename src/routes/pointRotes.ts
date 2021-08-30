import express from 'express';
import { CreatePointController } from '../controllers/CreatePointController';
import { GetPointsController } from '../controllers/GetPointsController';
import { GetPointController } from '../controllers/GetPointController';
import { UpdatePointController } from '../controllers/UpdatePointController';
import { DeletePointController } from '../controllers/DeletePointController';

const pointRoutes = express.Router();

const createPointController = new CreatePointController();
const getPointscontroller = new GetPointsController();
const getPointcontroller = new GetPointController();
const updatePointController = new UpdatePointController();
const deletePointController = new DeletePointController();

pointRoutes.post('/points', createPointController.handle);
pointRoutes.get('/points', getPointscontroller.handle);
pointRoutes.get('/points/:id', getPointcontroller.handle);
pointRoutes.put('/points/:id', updatePointController.handle);
pointRoutes.delete('points/:id', deletePointController.handle);

export default pointRoutes;
