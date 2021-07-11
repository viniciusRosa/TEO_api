import { VacancyrequestData } from '../data/VacancyrequestData';

class GetVacancyrequestListService {
  async execute() {

    // Use cases for message

    const vacancyData = new VacancyrequestData();

    const vacancyrequests = await vacancyData.index();

    return vacancyrequests;
  }
}

export { GetVacancyrequestListService }
