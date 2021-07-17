export interface IStudent {
  id: string;
  name: string;
  email: string;
  password: string;
  schoolId: string;
  nodeId: string;
  shift: string;
  series: string;
  classe: string;
  image: string;
  borndate: string;
  cpf: string;
  rg: string;
  address: string;
  number: string;
  complement: string;
  uf: string;
  city: string;
}

class Student implements IStudent {

  id: string;
  name: string;
  email: string;
  password: string;
  schoolId: string;
  nodeId: string;
  shift: string;
  series: string;
  classe: string;
  image: string;
  borndate: string;
  cpf: string;
  rg: string;
  address: string;
  number: string;
  complement: string;
  uf: string;
  city: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    schoolId: string,
    nodeId: string,
    shift: string,
    series: string,
    classe: string,
    image: string,
    borndate: string,
    cpf: string,
    rg: string,
    address: string,
    number: string,
    complement: string,
    uf: string,
    city: string
  ) {
    this.id = id ;
    this.name = name;
    this.email = email;
    this.password = password;
    this.schoolId = schoolId;
    this.nodeId = nodeId;
    this.shift = shift;
    this.series = series;
    this.classe = classe;
    this.image = image;
    this.borndate = borndate;
    this.cpf = cpf;
    this.rg = rg;
    this.address = address;
    this.number = number;
    this.complement = complement;
    this.uf = uf;
    this.city = city;  }
}

export { Student }
