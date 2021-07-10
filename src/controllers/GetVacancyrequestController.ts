import { Request, Response } from 'express';
import { GetVacancyrequestService } from '../services/GetVacancyrequestService';

class GetVacancyrequestController {
  async handle(request: Request, response: Response) {

    const getVacancyrequestService = new GetVacancyrequestService();

    const vacancyrequests = await getVacancyrequestService.execute();

    return response.json(vacancyrequests)
  }
}

export { GetVacancyrequestController }
