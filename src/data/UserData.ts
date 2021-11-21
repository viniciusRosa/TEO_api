import { IUser } from '../entities/User';
import connection from '../database/connection';
import { IData } from '../services/UpdatePointService';

class UserData {

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const user = await trx('users')
        .select('users.*')
        .where('users.id', id)

      await trx.commit();

      return user;

    } catch (err) {

      throw new Error(err);

    }

  }

  async index() {
    try {

      const trx = await connection.transaction();

      const users = await trx('users')
        .select('users.*')

      await trx.commit();

      return users;

    } catch (err) {

      throw new Error(err);

    }
  }


  async save(user: IUser) {

    try {

      const trx = await connection.transaction();

      const newUser = await trx('users').insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }, ['*'])

      await trx.commit();

      return newUser;

    } catch(err: any) {

      throw new Error(err);

    }
  }

  async update(id: string, name: string, email: string, password: string) {
    try {

      const trx = await connection.transaction();

      const updatedUser = await trx('users').where('id', '=', id)
        .update({
          name,
          email,
          password
        })

        await trx.commit();

      return updatedUser;

    } catch (err) {

      throw new Error(err);

    }
  }

  async delete(id: string) {
    try {

      const trx = await connection.transaction();

      await trx('users').where('id', '=', id)
        .del()
        await trx.commit();

      return {status: 'ok'};


    } catch (err) {

      throw new Error(err);

    }
  }

}

export { UserData }
