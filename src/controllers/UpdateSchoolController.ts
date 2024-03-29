import { Request, Response } from 'express';
import { UpdateSchoolService } from '../services/UpdateSchoolService';

class UpdateSchoolController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

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

    const updateSchoolService = new UpdateSchoolService();

    const school = await updateSchoolService.execute( id, {
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
    });

    return response.json(school)
  }
}

export { UpdateSchoolController }
