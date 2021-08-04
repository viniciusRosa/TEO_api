import express from 'express';
const studentRoutes = express.Router();

import multer from 'multer';
import { studentStorage } from '../config/multer';

import { CreateFirstAppAccessController }  from '../controllers/CreateFirstAppAccessController';
const createFirstAppAccessController = new CreateFirstAppAccessController();

import { GetStudentController } from '../controllers/GetStudentController';
const getStudentController = new GetStudentController();

const upload = multer({ storage: studentStorage });

studentRoutes.post('/students', upload.single('image'), createFirstAppAccessController.handle)

// studentRoutes.post('/students', upload.single('image'), (req, res) => {
//   console.log(req)
// })

studentRoutes.get('/students/:id', getStudentController.handle)


export default studentRoutes;
