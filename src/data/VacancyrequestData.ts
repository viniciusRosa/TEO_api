import { IVacancyrequest } from '../entities/Vacancyrequest';
import connection from '../database/connection';

class VacancyrequestData {

  async index() {

    try{

      const trx = await connection.transaction();

      const vacancyrequests = await trx('vacancyrequests').select();

      return vacancyrequests

    } catch(err) {

       throw new Error(err);

    }
  }

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
