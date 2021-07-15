export interface IUser {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string
}

class User implements IUser {

  id: string;
  name: string;
  email: string;
  role: string;
  password: string

  constructor(id: string, name: string, email: string, role: string, password: string) {
    this.id = id
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}

export { User }
