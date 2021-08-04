import { Request, Response } from 'express';
import { GetSchoolsService } from '../services/GetSchoolsService';

class GetSchoolsController {
  async handle(request: Request, response: Response) {

    const getSchoolsService = new GetSchoolsService();

    const schools = await getSchoolsService.execute();

    return response.json(schools)
  }
}

export { GetSchoolsController }
