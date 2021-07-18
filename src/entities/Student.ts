export interface IStudent {
  id: string;
  name: string;
  email: string;
  password: string;
  schoolId: string;
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
  latitude: number;
  longitude: number;
}

class Student implements IStudent {

  id: string;
  name: string;
  email: string;
  password: string;
  schoolId: string;
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
  latitude: number;
  longitude: number;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    schoolId: string,
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
    city: string,
    latitude: number,
    longitude: number
  ) {
    this.id = id ;
    this.name = name;
    this.email = email;
    this.password = password;
    this.schoolId = schoolId;
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
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export { Student }
