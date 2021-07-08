import express from 'express';
import { SendMessageController } from  '../controllers/SendMessageController';
const messageRoutes = express.Router();

const sendMessageController = new SendMessageController();

messageRoutes.post('/messages', sendMessageController.handle)

// schoolRoutes.get('/schools', schoolController.index)

// schoolRoutes.get('/schools/:id', schoolController.show);

// studentRoutes.post('/students',upload.single('image'), filesController.create, studentController.create)

// schoolRoutes.put('/schools/:id', upload.single('image'), filesController.create, schoolController.update);

// schoolRoutes.delete('/schools/:id', schoolController.delete);

export default messageRoutes;