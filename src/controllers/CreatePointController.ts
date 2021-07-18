import { Request, Response } from 'express';
import { CreatePointService } from '../services/CreatePointService';

class CreatePointController {
  async handle(request: Request, response: Response) {
    const {
        name,
        address,
        number,
        district,
        uf,
        city
      } = request.body;

    const createPointService = new CreatePointService();

    const point = await createPointService.execute(
      name,
      address,
      number,
      district,
      uf,
      city
      );

    return response.json(point)
  }
}

export { CreatePointController }
