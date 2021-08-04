import { Request, Response } from 'express';
import { GetMessagesService } from '../services/GetMessagesService';

class GetMessagesController {
  async handle(request: Request, response: Response) {

    const { vacancyrequest } = request.params;

    const getMessagesService = new GetMessagesService();

    const messages = await getMessagesService.execute(vacancyrequest);

    return response.json(messages)
  }
}

export { GetMessagesController }
