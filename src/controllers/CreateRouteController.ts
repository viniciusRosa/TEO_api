import { Request, Response } from 'express';
import { CreateRouteService } from '../services/CreateRouteService';

class CreateRouteController {
  async handle(request: Request, response: Response) {
    const {
        name,
        vacancy,
        shift
      } = request.body;

    const createRouteService = new CreateRouteService();

    const route = await createRouteService.execute(
      name,
      vacancy,
      shift
      );

    return response.json(route)
  }
}

export { CreateRouteController }
