import { IMessage } from '../entities/Message';
import connection  from '../database/connection';


interface IMessageData {
    save({}: IMessage): void;
}

class MessageData implements IMessageData {
   
    async save ({ fromId, toId, message }: IMessage) {

        const trx = await connection.transaction();

        const msg = await trx('message').insert({
            from_id: fromId,
            to_id: toId,
            message
        }, ['id', 'message'])

        await trx.commit();

        return msg;

    }

}

export { MessageData }