import { Student } from '../entities/Student';
import { StudentData } from '../data/StudentData';
import {v4 as uuid} from 'uuid';
import { geocodeService } from './GeocodeService';

class CreateStudentService {
  async execute(
    image: string,
    name: string,
    address: string,
    number: string,
    complement: string,
    uf: string,
    city: string,
    email: string,
    password: string,
    shift: string,
    series: string,
    classe: string,
    borndate: string,
    cpf: string,
    rg: string,
    schoolId: string
    ) {

    const geocoding = await geocodeService(address, number, city, uf);

    const student = new Student(
      uuid(),
      name,
      email,
      password,
      schoolId,
      shift,
      series,
      classe,
      image,
      borndate,
      cpf,
      rg,
      address,
      number,
      complement,
      uf,
      city,
      geocoding.lat,
      geocoding.lng
      );

    const studentData = new StudentData();

    const newStudent = await studentData.save(student);

    return newStudent;
  }
}

export { CreateStudentService }
