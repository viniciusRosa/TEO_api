import { IVacancyrequest } from '../entities/Vacancyrequest';
import connection from '../database/connection';

class VacancyrequestData {

  async save(vacancy: IVacancyrequest) {

    try {

      const trx = await connection.transaction();

      const vacancyrequest = await trx('vacancyrequests').insert({
        userid: vacancy.userid,
        status: vacancy.status
      }, ['id', 'status'])

      await trx.commit();

      return vacancyrequest;

    } catch(err) {

      throw new Error(err);

    }


  }
}

export { VacancyrequestData }
