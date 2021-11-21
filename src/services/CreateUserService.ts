import { User } from '../entities/User';
import { UserData } from '../data/UserData';
import {v4 as uuid} from 'uuid';


class CreateUserService {
  async execute(name: string, email: string, password: string ) {

    // Use cases for message

    const user = new User(uuid(), name, email, password);

    const userData = new UserData();

    const newUser = await userData.save(user);

    return newUser;
  }
}

export { CreateUserService }
