import { SchoolData } from '../data/SchoolData';

class GetSchoolService {
  async execute(id: string) {

    // Use cases for message

    const schoolData = new SchoolData();

    const school = await schoolData.show(id);

    return school;
  }
}

export { GetSchoolService }
