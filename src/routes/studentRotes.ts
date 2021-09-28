import express from 'express';
import multer from 'multer';
import { studentStorage } from '../config/multer';
import { CreateStudentController } from '../controllers/CreateStudentController';
import { GetStudentController } from '../controllers/GetStudentController';
import { GetStudentEmailCheckController } from '../controllers/GetStudentEmailCheckController';
import { UpdateStudentController } from '../controllers/UpdateStudentController';


const studentRoutes = express.Router();

const createStudentController = new CreateStudentController();
const getStudentController = new GetStudentController();
const getStudentEmailCheckController = new GetStudentEmailCheckController();
const updateStudentController = new UpdateStudentController();

const upload = multer({ storage: studentStorage });

studentRoutes.post('/students', upload.single('image'), createStudentController.handle);
studentRoutes.get('/students/:id', getStudentController.handle);
studentRoutes.get('/emailcheck/:email', getStudentEmailCheckController.handle);

studentRoutes.put('/students/:id', upload.single('image'), updateStudentController.handle);

// studentRoutes.put('/students/:id', (req, res) => {
//   console.log(req.params);
//   console.log(req.body);
// });


export default studentRoutes;
