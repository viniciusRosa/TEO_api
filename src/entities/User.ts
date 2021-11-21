export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string
}

class User implements IUser {

  id: string;
  name: string;
  email: string;
  password: string

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export { User }
