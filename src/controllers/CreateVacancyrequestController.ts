import { Request, Response } from 'express';
import { CreateVacancyrequestService } from '../services/CreateVacancyrequestService';

class CreateVacancyrequestController {
  async handle(request: Request, response: Response) {
    const {
        studentid,
        route,
        status
      } = request.body;

    const createVacancyrequestService = new CreateVacancyrequestService();

    const vacancyrequest = await createVacancyrequestService.execute(studentid, route, status);

    return response.json(vacancyrequest)
  }
}

export { CreateVacancyrequestController }
