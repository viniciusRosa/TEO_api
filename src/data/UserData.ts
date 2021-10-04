import { IUser } from '../entities/User';
import connection from '../database/connection';

class UserData {

  async index() {
    try {

      const trx = await connection.transaction();

      const points = await trx('users')
        .select('users.*')

      await trx.commit();

      return points;

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
        role: user.role,
        password: user.password
      }, ['*'])

      await trx.commit();

      return newUser;

    } catch(err: any) {

      throw new Error(err);

    }
  }
}

export { UserData }
