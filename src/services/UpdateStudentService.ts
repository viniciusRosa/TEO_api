import { StudentData } from '../data/StudentData';

export interface IData {
  image?: string,
  name?: string,
  address?: string,
  number?: string,
  complement?: string,
  uf?: string,
  city?: string,
  email?: string,
  password?: string,
  shift?: string,
  series?: string,
  classe?: string,
  borndate?: string,
  cpf?: string,
  rg?: string,
  schoolId?: string
}

class UpdateStudentService {
  async execute( id: string, data: IData) {

    // Use cases for message

    const studentData = new StudentData();

    const updateStudent = await studentData.update(id, data);

    return updateStudent;
  }
}

export { UpdateStudentService }
