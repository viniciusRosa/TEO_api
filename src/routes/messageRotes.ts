import express from 'express';
import { CreateMessageController } from  '../controllers/CreateMessageController';
import { GetMessagesController } from  '../controllers/GetMessagesController';

const messageRoutes = express.Router();

const createMessageController = new CreateMessageController();
const getMessagesController = new GetMessagesController();

// messageRoutes.post('/messages', (req, res) => {
//   console.log(req.body)
//   res.send(req.body)
// })

messageRoutes.post('/messages', createMessageController.handle)

messageRoutes.get('/messages/:vacancyrequest', getMessagesController.handle)

// messageRoutes.get('/messages/:from/:to', getMessagesController.handle)


export default messageRoutes;
