import express from 'express';
const pointRoutes = express.Router();

import PointController from '../controllers/PointController';
const pointController = new PointController;

import FilesController from '../controllers/FilesController';
const filesController = new FilesController;

pointRoutes.get('/points', pointController.index)

pointRoutes.get('/points/:id', pointController.show);

pointRoutes.post('/points', pointController.create)

pointRoutes.put('/points/:id', pointController.update);

pointRoutes.delete('/points/:id', pointController.delete);

export default pointRoutes;