import { StudentData } from '../data/StudentData';

class GetStudentEmailCheckService {
  async execute( email: string ) {

    // Use cases for message

    const studentData = new StudentData();

    const student = await studentData.checkEmail(email);

    if (student != undefined) {
      return {message: true}
    } else {
      return {message: false}
    }

  }
}

export { GetStudentEmailCheckService }
