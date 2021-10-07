import { VacancyrequestData } from '../data/VacancyrequestData';
import vacancyrequestRoutes from '../routes/vacancyrequestRotes';
import { CreateStudentsRoutesService } from './CreateStudentsRoutesService';


class UpdateVacancyStatusService {
  async execute( vacancyId: string, newStatus: string, studentId:string, routeId:string) {

    // Use cases for message

    if(newStatus === 'accepted') {

      const createStudentsRoutesService = new CreateStudentsRoutesService();
      const studentRoute = await createStudentsRoutesService.execute(studentId, routeId);

      const vacancyData = new VacancyrequestData();
      const updateVacancyStatus = await vacancyData.update(vacancyId, newStatus);

      return updateVacancyStatus;
    } else if(newStatus === 'rejected') {

      const vacancyData = new VacancyrequestData();
      const updateVacancyStatus = await vacancyData.update(vacancyId, newStatus);
      return updateVacancyStatus;

    }
  }
}

export { UpdateVacancyStatusService }
