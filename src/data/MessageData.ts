import { IMessage } from '../entities/Message';
import connection from '../database/connection';


interface IMessageData {
  save({ }: IMessage): void;
}

class MessageData implements IMessageData {

  async save(message: IMessage) {

    const trx = await connection.transaction();

    const msg = await trx('messages').insert({
      from_id: message.fromId,
      to_id: message.toId,
      message: message.message
    }, ['id', 'message'])

    await trx.commit();

    return msg;

  }
}

export { MessageData }
