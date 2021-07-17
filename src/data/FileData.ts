import { IFile } from '../entities/File';
import connection from '../database/connection';

class FileData {

  async save(file: IFile) {

    try {

      const trx = await connection.transaction();

      const newFile = await trx('files').insert({
        id: file.id,
        filename: file.filename,
        originalname: file.originalname,
        fieldname: file.fieldname,
        mimetype: file.mimetype,
        destination: file.destination,
        path: file.path
      }, ['id'])

      await trx.commit();

      return newFile;

    } catch(err) {

      throw new Error(err);

    }


  }
}

export { FileData }
