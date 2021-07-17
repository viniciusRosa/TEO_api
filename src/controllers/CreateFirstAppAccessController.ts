import { Request, Response } from 'express';
import { CreateFileService } from '../services/CreateFileService';
import { CreateStudentService } from '../services/CreateStudentService';

class CreateFirstAppAccessController {
  async handle(request: Request, response: Response) {
    const {
      filename,
      originalname,
      fieldname,
      mimetype,
      destination,
      path
    } = request.file;

    const {
      name,
      email,
      password,
      schoolId,
      shift,
      series,
      classe,
      borndate,
      cpf,
      rg,
      address,
      number,
      complement,
      uf,
      city
    } = request.body

    const createFileService = new CreateFileService();

    const image = await createFileService.execute(
      filename,
      originalname,
      fieldname,
      mimetype,
      destination,
      path
      );

    const createStudentService = new CreateStudentService();

    const student = await createStudentService.execute(
      image[0].id,
      name,
      address,
      number,
      complement,
      uf,
      city,
      email,
      password,
      shift,
      series,
      classe,
      borndate,
      cpf,
      rg,
      schoolId
    );

    return response.send(student)
  }
}

export { CreateFirstAppAccessController }
