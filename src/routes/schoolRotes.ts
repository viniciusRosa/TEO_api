import express from 'express';
const schoolRoutes = express.Router();

import multer from 'multer';
import { schoolStorage } from '../config/multer'

import SchoolController from '../controllers/SchoolController'
const schoolController = new SchoolController;

import FilesController from '../controllers/FilesController';
const filesController = new FilesController;

const upload = multer({ storage: schoolStorage })

schoolRoutes.get('/schools', schoolController.index)

schoolRoutes.get('/schools/:id', schoolController.show);

schoolRoutes.post('/schools',upload.single('school'), filesController.create, schoolController.create)

schoolRoutes.put('/schools/:id', upload.single('image'), filesController.create, schoolController.update);

schoolRoutes.delete('/schools/:id', schoolController.delete);

export default schoolRoutes;