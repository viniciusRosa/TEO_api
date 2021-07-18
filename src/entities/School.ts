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
  pointId: string
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
  pointId: string;

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
    pointId: string
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
    this.pointId = pointId
  }
}

export { School }
