import express from 'express';
import { CreateRouteController }  from '../controllers/CreateRouteController';
import { GetRoutesController } from '../controllers/GetRoutesController';
import { GetRouteController } from '../controllers/GetRouteController';
import { UpdateRouteController } from '../controllers/UpdateRouteController';
import { DeleteRouteController } from '../controllers/DeleteRouteController';

const routeRoutes = express.Router();

const createRouteController = new CreateRouteController();
const getRoutesController = new GetRoutesController();
const getRouteController = new GetRouteController();
const updateRouteController = new UpdateRouteController();
const deleteRouteController = new DeleteRouteController();

routeRoutes.post('/routes', createRouteController.handle);
routeRoutes.get('/routes', getRoutesController.handle);
routeRoutes.get('/routes/:id', getRouteController.handle);
routeRoutes.put('/routes/:id', updateRouteController.handle);
routeRoutes.delete('/routes/:id', deleteRouteController.handle);

export default routeRoutes;
