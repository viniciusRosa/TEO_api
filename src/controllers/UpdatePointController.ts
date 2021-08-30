import { Request, Response } from 'express';
import { UpdatePointService } from '../services/UpdatePointService';

class UpdatePointController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const {
      name,
      address,
      number,
      district,
      uf,
      city
      } = request.body;

    const updatePointService = new UpdatePointService();

    const point = await updatePointService.execute( id, {
      name,
      address,
      number,
      district,
      uf,
      city
    });

    return response.json(point)
  }
}

export { UpdatePointController }
