import express, { request } from 'express';
const schoolRoutes = express.Router();

import multer from 'multer';
import {schoolStorage} from '../config/multer'

import SchoolController from '../controllers/SchoolController'
const schoolController = new SchoolController;

import FilesController from '../controllers/FilesController';
const filesController = new FilesController;

const upload = multer({storage: schoolStorage})


schoolRoutes.get('/schools', schoolController.index)

schoolRoutes.get('/schools/:id', async function(request, response) {});

schoolRoutes.post('/schools', upload.single('school'), 
                            filesController.create, 
                            schoolController.create)
//  schoolRoutes.post('/schools', upload.single('school'), filesController.create, (req, res) => {
//     console.log(req)
// })

schoolRoutes.put('/schools/:id', async function(request, response) {});

schoolRoutes.delete('/schools/:id', async function(request, response) {});

export default schoolRoutes;