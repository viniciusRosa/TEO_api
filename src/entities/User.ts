export interface IUser {
  name: string;
  email: string;
  role: number;
  password: string
}

class User implements IUser {

  name: string;
  email: string;
  role: number;
  password: string

  constructor(name: string, email: string, role: number, password: string) {
    this.name = name;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}

export { User }
