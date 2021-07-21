import { Message } from '../entities/Message';
import { MessageData } from '../data/MessageData';
import {v4 as uuid} from 'uuid';

class SendMessageService {
  async execute( from: string, to: string, message: string ) {

    // Use cases for message

    const newmsg = new Message(uuid(), from, to, message);

    const messageData = new MessageData();

    const msg = await messageData.save(newmsg);

    return msg;
  }
}

export { SendMessageService }
