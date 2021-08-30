import express from 'express';
import { CreateMessageController } from  '../controllers/CreateMessageController';
import { GetMessagesController } from  '../controllers/GetMessagesController';

const messageRoutes = express.Router();

const createMessageController = new CreateMessageController();
const getMessagesController = new GetMessagesController();

messageRoutes.post('/messages', createMessageController.handle)
messageRoutes.get('/messages/:vacancyrequest', getMessagesController.handle)

export default messageRoutes;
