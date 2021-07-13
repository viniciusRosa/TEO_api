import { IMessage } from '../entities/Message';
import connection from '../database/connection';


interface IMessageData {
  save({ }: IMessage): void;
}

class MessageData implements IMessageData {

  async save(message: IMessage) {

    try{

      const trx = await connection.transaction();

      const msg = await trx('messages').insert({
        from_id: message.fromId,
        to_id: message.toId,
        message: message.message
      }, ['id', 'message'])

      await trx.commit();

      return msg;

    } catch(err) {
      throw new Error(err);
    }


  }

  async show(from: number, to: number) {

    try{

      const trx = await connection.transaction();

      const msgs = await trx('messages')
      .select()
      .whereIn('from_id', [from, to])
      .orWhereIn('to_id', [from, to]);

      await trx.commit();
      return msgs;

    } catch(err) {
      throw new Error(err);
    }


  }


}

export { MessageData }
