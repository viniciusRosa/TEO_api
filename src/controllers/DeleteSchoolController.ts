import { Request, Response } from 'express';
import { DeleteSchoolService } from '../services/DeleteSchoolService';

class DeleteSchoolController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const deletechoolService = new DeleteSchoolService();

    const school = await deletechoolService.execute(id);

    return response.json(school)
  }
}

export { DeleteSchoolController }
