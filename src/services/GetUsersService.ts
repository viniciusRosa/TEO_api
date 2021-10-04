import { UserData } from '../data/UserData';

class GetUsersService {
  async execute() {

    // Use cases for message

    const usersData = new UserData();

    const users = await usersData.index();

    return users;
  }
}

export { GetUsersService }
