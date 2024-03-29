import { Vacancyrequest } from '../entities/Vacancyrequest';
import { VacancyrequestData } from '../data/VacancyrequestData';
import {v4 as uuid} from 'uuid';


class CreateVacancyrequestService {
  async execute(studentid: string, route: string, status: string ) {

    // Use cases for message

    const vacancy = new Vacancyrequest(uuid(), studentid, route, status);

    const vacancyData = new VacancyrequestData();

    const newvacancy = await vacancyData.save(vacancy);

    return newvacancy;
  }
}

export { CreateVacancyrequestService }
