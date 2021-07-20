import express from 'express';
import { CreateRouteController }  from '../controllers/CreateRouteController';

const routeRoutes = express.Router();

const createRouteController = new CreateRouteController();

routeRoutes.post('/routes', createRouteController.handle)

export default routeRoutes;
