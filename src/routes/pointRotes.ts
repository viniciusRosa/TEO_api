import express from 'express';
const pointRoutes = express.Router();

import { CreatePointController } from '../controllers/CreatePointController';
const createPointController = new CreatePointController();


pointRoutes.post('/points', createPointController.handle)


export default pointRoutes;
