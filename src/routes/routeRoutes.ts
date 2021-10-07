import express from 'express';
import { CreateRouteController }  from '../controllers/CreateRouteController';
import { GetRoutesController } from '../controllers/GetRoutesController';
import { GetRouteController } from '../controllers/GetRouteController';
import { UpdateRouteController } from '../controllers/UpdateRouteController';
import { DeleteRouteController } from '../controllers/DeleteRouteController';
import { GetRoutewithpointsController } from '../controllers/GetRoutewithpointsController';

const routeRoutes = express.Router();

const createRouteController = new CreateRouteController();
const getRoutesController = new GetRoutesController();
const getRouteController = new GetRouteController();
const updateRouteController = new UpdateRouteController();
const deleteRouteController = new DeleteRouteController();
const getRoutewithpointsController = new GetRoutewithpointsController();

routeRoutes.post('/routes', createRouteController.handle);
routeRoutes.get('/routes', getRoutesController.handle);
routeRoutes.get('/routes/:id', getRouteController.handle);
routeRoutes.put('/routes/:id', updateRouteController.handle);
routeRoutes.delete('/routes/:id', deleteRouteController.handle);

routeRoutes.get('/routewithpoints/:id', getRoutewithpointsController.handle);

// test
import { GetCountRoutesService } from '../services/GetCountRoutesService';
const melancia = new GetCountRoutesService();
routeRoutes.get('/teststroutes', async (req, res) => {

  const {route, student} = req.body;

  const response = await melancia.execute(student, route);

  return res.send(response)
})


export default routeRoutes;
