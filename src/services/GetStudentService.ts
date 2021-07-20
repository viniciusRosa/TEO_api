import { Student } from '../entities/Student';
import { StudentData } from '../data/StudentData';

class GetStudentService {
  async execute( id: string ) {

    // Use cases for message

    const studentData = new StudentData();

    const student = await studentData.show(id);

    return student;
  }
}

export { GetStudentService }
