import { Request, Response } from 'express';
import { DeletePointService } from '../services/DeletePointService';

class DeletePointController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const deletePointService = new DeletePointService();

    const point = await deletePointService.execute(id);

    return response.json(point)
  }
}

export { DeletePointController }
