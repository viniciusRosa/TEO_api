import express from 'express';
import { SendMessageController } from  '../controllers/SendMessageController';
import { GetMessagesController } from  '../controllers/GetMessagesController';

const messageRoutes = express.Router();

const sendMessageController = new SendMessageController();
const getMessagesController = new GetMessagesController();


messageRoutes.post('/messages', sendMessageController.handle)
messageRoutes.get('/messages/:from/:to', getMessagesController.handle)


export default messageRoutes;
