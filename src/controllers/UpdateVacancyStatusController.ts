import { Request, Response } from 'express';
import { UpdateVacancyStatusService } from '../services/UpdateVacancyStatusService';

class UpdateVacancyStatusController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const data = request.body;

    const updateVacancyStatusService = new UpdateVacancyStatusService()

    const vancacy = await updateVacancyStatusService.execute(id, data.status)

    return response.json(vancacy)
  }
}

export { UpdateVacancyStatusController }
