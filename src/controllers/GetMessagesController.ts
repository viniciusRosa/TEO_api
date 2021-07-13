import { Request, Response } from 'express';
import { GetMessagesService } from '../services/GetMessagesService';

class GetMessagesController {
  async handle(request: Request, response: Response) {

    const { from, to } = request.params;

    const getMessagesService = new GetMessagesService();

    const messages = await getMessagesService.execute(Number(from), Number(to));

    return response.json(messages)
  }
}

export { GetMessagesController }
