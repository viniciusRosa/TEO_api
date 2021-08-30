import express from 'express';
import { CreateRouteController }  from '../controllers/CreateRouteController';
import { GetRoutesController } from '../controllers/GetRoutesController';

const routeRoutes = express.Router();

const createRouteController = new CreateRouteController();
const getRoutesController = new GetRoutesController();

routeRoutes.post('/routes', createRouteController.handle);
routeRoutes.get('/routes', getRoutesController.handle);

export default routeRoutes;
