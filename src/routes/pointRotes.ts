import express from 'express';
const pointRoutes = express.Router();

import PointController from '../controllers/PointController';
const pointController = new PointController;

import FilesController from '../controllers/FilesController';
const filesController = new FilesController;

// schoolRoutes.get('/schools', schoolController.index)

// schoolRoutes.get('/schools/:id', schoolController.show);

pointRoutes.post('/points', pointController.create)

// schoolRoutes.put('/schools/:id', upload.single('image'), filesController.create, schoolController.update);

// schoolRoutes.delete('/schools/:id', schoolController.delete);

export default pointRoutes;