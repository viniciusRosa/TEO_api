import { IMessage } from '../entities/Message';
import connection from '../database/connection';


interface IMessageData {
  save({ }: IMessage): void;
}

class MessageData implements IMessageData {

  async save(message: IMessage) {

    try {

      const trx = await connection.transaction();

      const msg = await trx('messages').insert({
        id: message.id,
        vacancyrequest_id: message.vacancyrequestId,
        from_id: message.fromId,
        to_id: message.toId,
        message: message.message
      }, ['id', 'message'])

      await trx.commit();

      return msg;

    } catch (err) {
      throw new Error(err);
    }


  }

  async showVacancyrequestMessages(vacancyrequest: string) {
    try {

      const trx = await connection.transaction();
      const msgs = await trx('messages')
        .select()
        .where('messages.vacancyrequest_id', vacancyrequest)
      await trx.commit();
      return msgs;

    } catch (err) {
      throw new Error(err);
    }

  }


  async show(from: string, to: string) {

    try {

      const trx = await connection.transaction();
      const msgs = await trx.raw('select * from messages where (from_id = ? and to_id = ?) or (from_id = ? and to_id = ?)', [from, to, to, from])

      await trx.commit();
      return msgs;

    } catch (err) {
      throw new Error(err);
    }


  }


}

export { MessageData }
