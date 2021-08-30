import { Request, Response } from 'express';
import { GetPointsService } from '../services/GetPointsService';

class GetPointsController {
  async handle(request: Request, response: Response) {

    const getPointsService = new GetPointsService();

    const points = await getPointsService.execute();

    return response.json(points)
  }
}

export { GetPointsController }
