import { Request, Response } from 'express';
import { GetSchoolService } from '../services/GetSchoolService';

class GetSchoolController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const getSchoolService = new GetSchoolService();

    const school = await getSchoolService.execute(id);

    return response.json(school)
  }
}

export { GetSchoolController }
