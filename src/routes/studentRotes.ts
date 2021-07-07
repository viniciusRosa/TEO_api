import express from 'express';
const studentRoutes = express.Router();

import multer from 'multer';
import { studentStorage } from '../config/multer';

import StudentController from '../controllers/StudentController';
const studentController = new StudentController;

import FilesController from '../controllers/FilesController';
const filesController = new FilesController;

const upload = multer({ storage: studentStorage })

// schoolRoutes.get('/schools', schoolController.index)

// schoolRoutes.get('/schools/:id', schoolController.show);

studentRoutes.post('/students',upload.single('image'), filesController.create, studentController.create)

// schoolRoutes.put('/schools/:id', upload.single('image'), filesController.create, schoolController.update);

// schoolRoutes.delete('/schools/:id', schoolController.delete);

export default studentRoutes;