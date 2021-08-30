import { Request, Response } from 'express';
import { GetRouteService } from '../services/GetRouteService';

class GetRouteController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const getRouteService = new GetRouteService();

    const route = await getRouteService.execute(id);

    return response.json(route)
  }
}

export { GetRouteController }
