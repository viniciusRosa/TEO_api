import express from 'express';
import schoolRotes from './schoolRotes';
import vehicleRotes from './vehicleRotes';

const routes = express.Router();

routes.use('/', schoolRotes)
routes.use('/', vehicleRotes)

export default routes;

