import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { vacancyrequestId, from, to, message } = request.body;

    const createMessageService = new CreateMessageService();

    const msg = await createMessageService.execute( vacancyrequestId, from, to, message );

    return response.json(msg)
  }
}

export { CreateMessageController }
