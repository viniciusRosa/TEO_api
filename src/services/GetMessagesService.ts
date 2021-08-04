import { MessageData } from '../data/MessageData';

class GetMessagesService {
  async execute(vacancyrequest: string) {

    // Use cases for message

    const messageData = new MessageData();

    const messages = await messageData.showVacancyrequestMessages(vacancyrequest);

    return messages;
  }
}

export { GetMessagesService }
