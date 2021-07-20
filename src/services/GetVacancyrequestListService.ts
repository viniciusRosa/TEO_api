import { VacancyrequestData } from '../data/VacancyrequestData';

class GetVacancyrequestListService {
  async execute(status: string) {

    // Use cases for message

    const vacancyData = new VacancyrequestData();

    const vacancyrequests = await vacancyData.index(status);

    return vacancyrequests;
  }
}

export { GetVacancyrequestListService }
