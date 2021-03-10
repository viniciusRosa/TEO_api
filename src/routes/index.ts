import express from 'express';
import schoolRotes from './schoolRotes';
import vehicleRotes from './vehicleRotes';
import pointRoutes from './pointRotes'

const routes = express.Router();

routes.use('/', schoolRotes)
routes.use('/', vehicleRotes)
routes.use('/', pointRoutes)

export default routes;

