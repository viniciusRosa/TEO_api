import { Request, Response } from 'express';
import { CreateVacancyrequestService } from '../services/CreateVacancyrequestService';

class CreateVacancyrequestController {
  async handle(request: Request, response: Response) {
    const {
        userid,
      } = request.body;

    const createVacancyrequestService = new CreateVacancyrequestService();

    const vacancyrequest = await createVacancyrequestService.execute({ userid, status : 'analysing'});

    return response.json(vacancyrequest)
  }
}

export { CreateVacancyrequestController }
