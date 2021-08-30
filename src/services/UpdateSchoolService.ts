import { School } from '../entities/School';
import { SchoolData } from '../data/SchoolData';
import {v4 as uuid} from 'uuid';

export interface IData {
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
}

class UpdateSchoolService {
  async execute( id: string, data: IData) {

    // Use cases for message

    const schoolData = new SchoolData();

    const updateSchool = await schoolData.update(id, data);

    return updateSchool;
  }
}

export { UpdateSchoolService }
