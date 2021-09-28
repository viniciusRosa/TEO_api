import { Request, Response } from 'express';
import { GetRoutewithpointsService } from '../services/GetRoutewithpointsService';

class GetRoutewithpointsController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const getRoutewithpointsService = new GetRoutewithpointsService();

    const route = await getRoutewithpointsService.execute(id);

    return response.json(route)
  }
}

export { GetRoutewithpointsController }

