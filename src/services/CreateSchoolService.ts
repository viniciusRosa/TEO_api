import { School } from '../entities/School';
import { SchoolData } from '../data/SchoolData';
import {v4 as uuid} from 'uuid';

import { CreatePointService } from './CreatePointService';


class CreateSchoolService {
  async execute(
    name: string,
    address: string,
    number: string,
    district: string,
    complement: string,
    uf: string,
    city: string,
    cep: string,
    email: string,
    phone: string
    ) {

    // Use cases for message

    const createPointService = new CreatePointService();

    const pointId = await createPointService.execute(`PONTO - ${name}`, address, number, district, uf, city);

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
      pointId[0].id
      );

    const schoolData = new SchoolData();

    const newSchool = await schoolData.save(school);

    return newSchool;
  }
}

export { CreateSchoolService }
