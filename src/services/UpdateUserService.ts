import { UserData } from '../data/UserData';

class UpdateUserService {
  async execute(
    id: string,
    name: string,
    email: string,
    password: string) {

    // Use cases for message

    const userData = new UserData();

    const updateUser = await userData.update(id, name, email, password);

    return updateUser;
  }
}

export { UpdateUserService }
