import { StudentsRoutesData } from '../data/StudentsRoutesData';
import { RouteData } from '../data/RouteData';
import {v4 as uuid} from 'uuid';


class GetCountRoutesService {
  async execute(studentId: string, routeId: string) {

    const routeData = new RouteData();
    const studentRouteData = new StudentsRoutesData();

    const route = await routeData.show(routeId);

    const studentRouteAmount = await studentRouteData.countStudents(routeId);

    const amountStudent = studentRouteAmount[0].count;

    return {routeVacancy: Number(route[0].vacancy), studentsOnRoute: Number(amountStudent)};
  }

  async executeAll() {

    // Use cases for message

    // const studentRouteData = new StudentsRoutesData();

    // const newStudentRoute = await studentRouteData.save(uuid(), studentId, routeId);

    // return {routeVacancy: 0, studentsOnRoute: 0};
  }
}

export { GetCountRoutesService }
