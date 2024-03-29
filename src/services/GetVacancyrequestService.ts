import { VacancyrequestData } from '../data/VacancyrequestData';

class GetVacancyrequestService {
  async execute(id: string) {

    // Use cases for message

    const vacancyData = new VacancyrequestData();

    const vacancyrequests = await vacancyData.show(id);

    return vacancyrequests;
  }
}

export { GetVacancyrequestService }
