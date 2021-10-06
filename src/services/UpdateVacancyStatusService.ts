import { VacancyrequestData } from '../data/VacancyrequestData';


class UpdateVacancyStatusService {
  async execute( id: string, data: string) {

    // Use cases for message

    const vacancyData = new VacancyrequestData();

    const updateVacancyStatus = await vacancyData.update(id, data);

    return updateVacancyStatus;
  }
}

export { UpdateVacancyStatusService }
