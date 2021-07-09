import { IUser, User } from '../entities/User';
import { UserData } from '../data/UserData';

class CreateUserService {
  async execute({ name, email, role, password }: IUser) {

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

    const user = new User(name, email, role, password);

    const userData = new UserData();

    const newUser = await userData.save(user);

    return newUser;
  }
}

export { CreateUserService }
