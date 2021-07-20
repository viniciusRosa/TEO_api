import { Request, Response } from 'express';
import { GetVacancyrequestListService } from '../services/GetVacancyrequestListService';

class GetVacancyrequestListController {
  async handle(request: Request, response: Response) {

    const { status } = request.params;

    const getVacancyrequestListService = new GetVacancyrequestListService();

    const vacancyrequests = await getVacancyrequestListService.execute(status);

    return response.json(vacancyrequests)
  }
}

export { GetVacancyrequestListController }
