import { IMessage } from '../entities/Message';
import { MessageData } from '../data/MessageData';

class SendMessageService {
    async execute ({ fromId, toId, message }: IMessage) {
        
        // Use cases for message
        
        const messageData = new MessageData();

        const msg =  await messageData.save({ fromId, toId, message });

        return msg;
    }
}

export { SendMessageService }