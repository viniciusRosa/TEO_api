import express from 'express';
import { CreateRouteController }  from '../controllers/CreateRouteController';
import { GetRoutesController } from '../controllers/GetRoutesController';
import { GetRouteController } from '../controllers/GetRouteController';
import { UpdateRouteController } from '../controllers/UpdateRouteController';
import { DeleteRouteController } from '../controllers/DeleteRouteController';

import { geocodeService } from '../services/GeocodeService';

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

routeRoutes.post('/geo', (req, res) => {
  const { addres, number, city, uf } = req.body;
  geocodeService(addres, number, city, uf).then(response => console.log(response))
  res.send()
})

export default routeRoutes;
