import { MessageData } from '../data/MessageData';

class GetMessagesService {
  async execute(from: number, to: number) {

    // Use cases for message

    const messageData = new MessageData();

    const messages = await messageData.show(from, to);

    return messages;
  }
}

export { GetMessagesService }
