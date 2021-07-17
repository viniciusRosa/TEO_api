import { File } from '../entities/File';
import { FileData } from '../data/FileData';
import {v4 as uuid} from 'uuid';


class CreateFileService {
  async execute(
    filename: string,
    originalname: string,
    fieldname: string,
    mimetype: string,
    destination: string,
    path: string
    ) {

    // Use cases for message

    const file = new File(
      uuid(),
      filename,
      originalname,
      fieldname,
      mimetype,
      destination,
      path
    );

    const fileData = new FileData();

    const newFile = await fileData.save(file);

    return newFile;
  }
}

export { CreateFileService }
