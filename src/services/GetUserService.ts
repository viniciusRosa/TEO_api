import { UserData } from '../data/UserData';

class GetUserService {
  async execute(id: string) {

    // Use cases for message

    const userData = new UserData();

    const user = await userData.show(id);

    return user;
  }
}

export { GetUserService }
