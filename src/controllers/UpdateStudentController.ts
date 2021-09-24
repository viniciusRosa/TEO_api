import { Request, Response } from 'express';
import { UpdateStudentService } from '../services/UpdateStudentService';
import { CreateFileService } from '../services/CreateFileService';

class UpdateStudentController {
  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const data = request.body;

    const file = request.file;

    let imageid = null;
    const createFileService = new CreateFileService();
    const updateStudentService = new UpdateStudentService();

    if (file !== undefined) {

      const image = await createFileService.execute(
       file.filename,
       file.originalname,
       file.fieldname,
       file.mimetype,
       file.destination,
       file.path
       );

       imageid = (image[0].id)
       const student = await updateStudentService.execute(id, {...data, image: imageid});
       return response.json(student)

     } else {

      const student = await updateStudentService.execute(id, data);
      return response.json(student)

     }

  }
}

export { UpdateStudentController }
