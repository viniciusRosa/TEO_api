export interface IFile {
  id: string;
  filename: string;
  originalname: string;
  fieldname: string;
  mimetype: string;
  destination: string;
  path: string;
}

class File implements IFile {

  id: string;
  filename: string;
  originalname: string;
  fieldname: string;
  mimetype: string;
  destination: string;
  path: string;

  constructor(id: string, filename: string, originalname: string, fieldname: string,
    mimetype: string, destination: string, path: string) {

      this.id = id
      this.filename = filename;
      this.originalname = originalname;
      this.fieldname = fieldname;
      this.mimetype = mimetype;
      this.destination = destination;
      this.path = path;

  }
}

export { File }
