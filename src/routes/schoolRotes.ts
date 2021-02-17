import express from 'express';
const schoolRoutes = express.Router();

import multer from 'multer';
import {schoolStorage} from '../config/multer'

import SchoolController from '../controllers/SchoolController'
const schoolController = new SchoolController;

const upload = multer({storage: schoolStorage})


schoolRoutes.get('/schools', schoolController.index)

schoolRoutes.get('/schools/:id', async function(request, response) {});

schoolRoutes.post('/schools', upload.single('image'), schoolController.create)
// schoolRoutes.post('/schools', upload.single('image'),  (req, res) => {
//     console.log(req)
// })

schoolRoutes.put('/schools/:id', async function(request, response) {});

schoolRoutes.delete('/schools/:id', async function(request, response) {});

export default schoolRoutes;