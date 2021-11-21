import { UserData } from '../data/UserData';

class DeleteUserService {
  async execute( id: string) {

    // Use cases for message

    const userData = new UserData();

    const deleteUser = await userData.delete(id);

    return deleteUser;
  }
}

export { DeleteUserService }
