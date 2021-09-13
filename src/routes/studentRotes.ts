import express from 'express';
import multer from 'multer';
import { studentStorage } from '../config/multer';
import { CreateFirstAppAccessController }  from '../controllers/CreateFirstAppAccessController';
import { CreateStudentController } from '../controllers/CreateStudentController';
import { GetStudentController } from '../controllers/GetStudentController';

const studentRoutes = express.Router();

const createFirstAppAccessController = new CreateFirstAppAccessController();
const createStudentController = new CreateStudentController();

const getStudentController = new GetStudentController();

const upload = multer({ storage: studentStorage });

studentRoutes.post('/students', upload.single('image'), createStudentController.handle)
// studentRoutes.post('/students', upload.single('image'), createFirstAppAccessController.handle)

studentRoutes.get('/students/:id', getStudentController.handle)

export default studentRoutes;
