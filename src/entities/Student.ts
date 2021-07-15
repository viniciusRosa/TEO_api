export interface IStudent {
  name: string;
  email: string;
  image: number;
  address: string;

  password: string
}

class Student implements IStudent {

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

export { Student }
