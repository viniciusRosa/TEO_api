import { SchoolData } from '../data/SchoolData';

class DeleteSchoolService {
  async execute( id: string) {

    // Use cases for message

    const schoolData = new SchoolData();

    const deleteSchool = await schoolData.delete(id);

    return deleteSchool;
  }
}

export { DeleteSchoolService }
