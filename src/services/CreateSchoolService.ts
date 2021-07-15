import { School } from '../entities/School';
import { SchoolData } from '../data/SchoolData';
import {v4 as uuid} from 'uuid';


class CreateSchoolService {
  async execute(
    name: string,
    address: string,
    number: string,
    district: string ,
    complement: string,
    uf: string,
    city: string,
    cep: string,
    email: string,
    phone: string
    ) {

    // Use cases for message

    const node = 'd96b64f9-39ef-4ac1-b9be-fcfd62752698'

    const school = new School(
      uuid(),
      name,
      address,
      number,
      district,
      complement,
      uf,
      city,
      cep,
      email,
      phone,
      node
      );

    const schoolData = new SchoolData();

    const newSchool = await schoolData.save(school);

    return newSchool;
  }
}

export { CreateSchoolService }
