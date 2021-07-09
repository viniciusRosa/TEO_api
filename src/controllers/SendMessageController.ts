import { Request, Response } from 'express';
import { SendMessageService } from '../services/SendMessageService';

class SendMessageController {
  async handle(request: Request, response: Response) {
    const { fromId, toId, message } = request.body;

    const sendMessageService = new SendMessageService();

    const msg = await sendMessageService.execute({ fromId, toId, message });

    return response.json(msg)
  }
}

export { SendMessageController }
