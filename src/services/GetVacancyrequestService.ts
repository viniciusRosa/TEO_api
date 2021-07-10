import { IVacancyrequest, Vacancyrequest } from '../entities/Vacancyrequest';
import { VacancyrequestData } from '../data/VacancyrequestData';

class GetVacancyrequestService {
  async execute() {

    // Use cases for message


    const vacancyData = new VacancyrequestData();

    const vacancyrequests = await vacancyData.index();

    return vacancyrequests;
  }
}

export { GetVacancyrequestService }
