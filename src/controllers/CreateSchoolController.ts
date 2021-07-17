import { Request, Response } from 'express';
import { CreateSchoolService } from '../services/CreateSchoolService';

class CreateSchoolController {
  async handle(request: Request, response: Response) {
    const {
        name,
        address,
        number,
        district,
        complement,
        uf,
        city,
        cep,
        email,
        phone
      } = request.body;

    const createSchoolService = new CreateSchoolService();

    const school = await createSchoolService.execute(
      name,
      address,
      number,
      district,
      complement,
      uf,
      city,
      cep,
      email,
      phone
      );

    return response.json(school)
  }
}

export { CreateSchoolController }
