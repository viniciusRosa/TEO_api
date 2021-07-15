import { User } from '../entities/User';
import { UserData } from '../data/UserData';
import {v4 as uuid} from 'uuid';


class CreateUserService {
  async execute(name: string, email: string, role: string, password: string ) {

    // Use cases for message

    if (!name) {
      throw new Error('Name incorrect')
    }

    if (!email) {
      throw new Error('Email incorrect')
    }

    if (!password) {
      throw new Error('Password incorrect')
    }

    const user = new User(uuid(), name, email, role, password);

    const userData = new UserData();

    const newUser = await userData.save(user);

    return newUser;
  }
}

export { CreateUserService }
