import { IMessage, Message } from '../entities/Message';
import { MessageData } from '../data/MessageData';

class SendMessageService {
  async execute({ fromId, toId, message }: IMessage) {

    // Use cases for message

    const newmsg = new Message(fromId, toId, message);

    const messageData = new MessageData();

    const msg = await messageData.save(newmsg);

    return msg;
  }
}

export { SendMessageService }
