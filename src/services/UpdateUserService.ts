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

  async executeHandleActivity(
    id: string,
    msg: boolean) {

    // Use cases for message

    const userData = new UserData();

    if (msg) {

      const updateUser = await userData.updateActivity(id, 1);
      return msg;

    } else {

      const updateUser = await userData.updateActivity(id, 0);
      return msg;

    }


  }

}

export { UpdateUserService }
