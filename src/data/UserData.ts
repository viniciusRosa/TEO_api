import { IUser } from '../entities/User';
import connection from '../database/connection';

class UserData {

  async save(user: IUser) {

    try {

      const trx = await connection.transaction();

      const newUser = await trx('users').insert({
        name: user.name,
        email: user.email,
        role: user.role,
        password: user.password
      }, ['id', 'email'])

      await trx.commit();

      return newUser;

    } catch(err) {

      throw new Error(err);

    }


  }
}

export { UserData }
