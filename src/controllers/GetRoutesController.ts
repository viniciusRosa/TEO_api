import { Request, Response } from 'express';
import { GetRoutesService } from '../services/GetRoutesService';

class GetRoutesController {
  async handle(request: Request, response: Response) {

    const getRoutesService = new GetRoutesService();

    const routes = await getRoutesService.execute();

    return response.json(routes)
  }
}

export { GetRoutesController }
