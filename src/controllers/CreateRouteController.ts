import { Request, Response } from 'express';
import { CreateRouteService } from '../services/CreateRouteService';

class CreateRouteController {
  async handle(request: Request, response: Response) {
    const {
      R00_name,
      R01_vacancy,
      R02_shift,
      R03_time
      } = request.body;

    const points = Object.values(request.body).slice(4)

    const createRouteService = new CreateRouteService();

    const route = await createRouteService.execute(
      R00_name,
      R01_vacancy,
      R02_shift,
      R03_time,
      points
      );

    return response.json(route)
  }
}

export { CreateRouteController }
