import { IMessage, Message } from '../entities/Message';
import { MessageData } from '../data/MessageData';

class SendMessageService {
  async execute( from: number, to: number, message: string ) {

    // Use cases for message
    if(!from || !to || !message) {
      throw new Error('Data is missing.')
    }

    const newmsg = new Message(from, to, message);

    const messageData = new MessageData();

    const msg = await messageData.save(newmsg);

    return msg;
  }
}

export { SendMessageService }
