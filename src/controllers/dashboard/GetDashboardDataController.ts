import { Request, Response } from 'express';
import { SchoolData } from '../../data/SchoolData';
import { StudentData } from '../../data/StudentData';
import { RouteData } from '../../data/RouteData';
import { VacancyrequestData } from '../../data/VacancyrequestData';


class GetDashboardDataController {

  async schoolAmount(request: Request, response: Response) {

    const schoolData = new SchoolData();

    const schoolamount = await schoolData.amount();

    return response.json(schoolamount[0].count)
  }

  async studentAmount(request: Request, response: Response) {

    const studentData = new StudentData();

    const studentamount = await studentData.amount();

    return response.json(studentamount[0].count)
  }

  async routeAmount(request: Request, response: Response) {

    const routeData = new RouteData();

    const routeamount = await routeData.amount();

    return response.json(routeamount[0].count)
  }

  async vacancyAmount(request: Request, response: Response) {

    const vacancyrequestData = new VacancyrequestData();

    const vacancy = await vacancyrequestData.amount();

    return response.json(vacancy[0].count)
  }

  async routeData(request: Request, response: Response) {

    const routesData = new RouteData();

    const routes = await routesData.amountStudents();

    return response.json(routes.rows)
  }

  async queueAmountData(request: Request, response: Response) {

    const vacancy = new VacancyrequestData();

    const studentOnQueue = await vacancy.amountStudentsOnQueue();

    return response.json(studentOnQueue)
  }
}

export { GetDashboardDataController }
