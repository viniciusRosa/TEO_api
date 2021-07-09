import { IMessage, Message } from '../entities/Message';
import { MessageData } from '../data/MessageData';

class SendMessageService {
  async execute({ fromId, toId, message }: IMessage) {

    // Use cases for message
    if(!fromId || !toId || !message) {
      throw new Error('Data is missing.')
    }

    const newmsg = new Message(fromId, toId, message);

    const messageData = new MessageData();

    const msg = await messageData.save(newmsg);

    return msg;
  }
}

export { SendMessageService }
