import express from 'express';
import multer from 'multer';
import { studentStorage } from '../config/multer';
import { CreateStudentController } from '../controllers/CreateStudentController';
import { GetStudentController } from '../controllers/GetStudentController';
import { GetStudentEmailCheckController } from '../controllers/GetStudentEmailCheckController';


const studentRoutes = express.Router();

const createStudentController = new CreateStudentController();
const getStudentController = new GetStudentController();
const getStudentEmailCheckController = new GetStudentEmailCheckController();

const upload = multer({ storage: studentStorage });

studentRoutes.post('/students', upload.single('image'), createStudentController.handle);
studentRoutes.get('/students/:id', getStudentController.handle);
studentRoutes.get('/student/emailcheck', getStudentEmailCheckController.handle);

export default studentRoutes;
