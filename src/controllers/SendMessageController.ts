import { Request, Response } from 'express';
import { SendMessageService } from '../services/SendMessageService';

class SendMessageController {
  async handle(request: Request, response: Response) {
    const { from, to, message } = request.body;

    const sendMessageService = new SendMessageService();

    const msg = await sendMessageService.execute( from, to, message );

    return response.json(msg)
  }
}

export { SendMessageController }
