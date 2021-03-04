import express from 'express';
const vehicleRoutes = express.Router();

import VehicleController from '../controllers/VehicleController';
const vehicleController = new VehicleController;

vehicleRoutes.get('/vehicles', vehicleController.index)

vehicleRoutes.post('/vehicles', vehicleController.create)

vehicleRoutes.get('/vehicles/:id', vehicleController.show);

vehicleRoutes.put('/vehicles/:id', vehicleController.update);

vehicleRoutes.delete('/vehicles/:id', vehicleController.delete);

export default vehicleRoutes;