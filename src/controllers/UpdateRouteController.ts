import { Request, Response } from 'express';
import { UpdateRouteService } from '../services/UpdateRouteService';

class UpdateRouteController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const {
      name,
      vacancy,
      shift
      } = request.body;

    const updateRouteService = new UpdateRouteService();

    const school = await updateRouteService.execute( id, {
      name,
      vacancy,
      shift
    });

    return response.json(school)
  }
}

export { UpdateRouteController }
