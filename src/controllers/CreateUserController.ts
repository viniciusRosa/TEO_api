import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
        name,
        email,
        role,
        password
      } = request.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute(name, email, role, password);

    return response.json(user)
  }
}

export { CreateUserController }
