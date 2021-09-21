import { Request, Response } from 'express';
import { GetStudentEmailCheckService } from '../services/GetStudentEmailCheckService';

class GetStudentEmailCheckController {
  async handle(request: Request, response: Response) {

    const { email } = request.params;

    const getStudentEmailCheckService = new GetStudentEmailCheckService();

    const emailResult = await getStudentEmailCheckService.execute(email);

    return response.json(emailResult)
  }
}

export { GetStudentEmailCheckController }
