import { IVacancyrequest, Vacancyrequest } from '../entities/Vacancyrequest';
import { VacancyrequestData } from '../data/VacancyrequestData';

class CreateVacancyrequestService {
  async execute({ userid, status }: IVacancyrequest) {

    // Use cases for message

    const vacancy = new Vacancyrequest(userid, status);

    const vacancyData = new VacancyrequestData();

    const newvacancy = await vacancyData.save(vacancy);

    return newvacancy;
  }
}

export { CreateVacancyrequestService }
