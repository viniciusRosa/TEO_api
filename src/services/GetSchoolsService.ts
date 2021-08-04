import { SchoolData } from '../data/SchoolData';

class GetSchoolsService {
  async execute() {

    // Use cases for message

    const schoolData = new SchoolData();

    const schools = await schoolData.index();

    return schools;
  }
}

export { GetSchoolsService }
