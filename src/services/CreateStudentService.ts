import { Student } from '../entities/Student';
import { StudentData } from '../data/StudentData';
import {v4 as uuid} from 'uuid';


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

    // Use cases for message

    // get latitude and longitude

    const latitude = 123123
    const longitude = 345345345

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
      latitude,
      longitude
      );

      console.log(student)
    const studentData = new StudentData();

    const newStudent = await studentData.save(student);

    return newStudent;
  }
}

export { CreateStudentService }
