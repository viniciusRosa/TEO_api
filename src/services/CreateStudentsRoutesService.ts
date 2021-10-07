import { StudentsRoutesData } from '../data/StudentsRoutesData';
import {v4 as uuid} from 'uuid';


class CreateStudentsRoutesService {
  async execute(studentId: string, routeId: string) {

    // Use cases for message

    const studentRouteData = new StudentsRoutesData();

    const newStudentRoute = await studentRouteData.save(uuid(), studentId, routeId);

    return newStudentRoute;
  }
}

export { CreateStudentsRoutesService }
