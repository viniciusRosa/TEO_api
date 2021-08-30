import { Request, Response } from 'express';
import { DeleteRouteService } from '../services/DeleteRouteService';

class DeleteRouteController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const deleteRouteService = new DeleteRouteService();

    const route = await deleteRouteService.execute(id);

    return response.json(route)
  }
}

export { DeleteRouteController }
