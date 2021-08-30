import { Request, Response } from 'express';
import { GetPointService } from '../services/GetPointService';

class GetPointController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const getPointService = new GetPointService();

    const point = await getPointService.execute(id);

    return response.json(point)
  }
}

export { GetPointController }
