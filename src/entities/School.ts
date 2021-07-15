export interface ISchool {
  id: string;
  name: string,
  address: string,
  number: string,
  district: string,
  complement: string,
  uf: string,
  city: string,
  cep: string,
  email: string,
  phone: string,
  node: string
}

class School implements ISchool {

  id: string;
  name: string;
  address: string;
  number: string;
  district: string;
  complement: string;
  uf: string;
  city: string;
  cep: string;
  email: string;
  phone: string;
  node: string;

  constructor(
    id: string,
    name: string,
    address: string,
    number: string,
    district: string ,
    complement: string,
    uf: string,
    city: string,
    cep: string,
    email: string,
    phone: string,
    node: string
    ) {
    this.id = id
    this.name = name,
    this.address = address,
    this.number = number,
    this.district =  district,
    this.complement = complement,
    this.uf = uf,
    this.city = city,
    this.cep = cep,
    this.email = email,
    this.phone = phone,
    this.node = node
  }
}

export { School }
