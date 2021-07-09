import express from 'express';
import { SendMessageController } from  '../controllers/SendMessageController';
const messageRoutes = express.Router();

const sendMessageController = new SendMessageController();

messageRoutes.post('/messages', sendMessageController.handle)

export default messageRoutes;
