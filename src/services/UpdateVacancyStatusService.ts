import { VacancyrequestData } from '../data/VacancyrequestData';
import vacancyrequestRoutes from '../routes/vacancyrequestRotes';
import { CreateStudentsRoutesService } from './CreateStudentsRoutesService';
import { GetCountRoutesService } from './GetCountRoutesService';


class UpdateVacancyStatusService {
  async execute( vacancyId: string, newStatus: string, studentId:string, routeId:string) {

    const createStudentsRoutesService = new CreateStudentsRoutesService();
    const vacancyData = new VacancyrequestData();
    const getCountRoutesService = new GetCountRoutesService()
    // Use cases for message

    if(newStatus === 'accepted') {

      const vacancyAmount = await getCountRoutesService.execute(routeId);

      if(vacancyAmount.studentsOnRoute >= vacancyAmount.routeVacancy) {

        const studentRoute = await createStudentsRoutesService.execute(studentId, routeId);
        const updateVacancyStatus = await vacancyData.update(vacancyId, 'queue');
        return updateVacancyStatus;

      } else {

        const studentRoute = await createStudentsRoutesService.execute(studentId, routeId);
        const updateVacancyStatus = await vacancyData.update(vacancyId, newStatus);
        return updateVacancyStatus;

      }

    } else if(newStatus === 'rejected') {

      const updateVacancyStatus = await vacancyData.update(vacancyId, newStatus);
      return updateVacancyStatus;

    }
  }
}

export { UpdateVacancyStatusService }
