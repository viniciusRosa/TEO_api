import { IVacancyrequest } from '../entities/Vacancyrequest';
import connection from '../database/connection';

class VacancyrequestData {

  async index(status: string) {

    try{

      const trx = await connection.transaction();

      const vacancyrequests = await trx('vacancyrequests')
      .join('students', 'students.id', '=', 'vacancyrequests.student_id')
      .join('files', 'files.id', '=', 'students.image')
      .join('schools', 'schools.id', '=', 'students.school_id')
      .join('routes', 'routes.id', '=', 'vacancyrequests.route')
      .select('files.filename', 'students.image', 'students.name as student',  'schools.name as school',
      'students.shift', 'students.uf', 'students.city', 'vacancyrequests.created_at', 'students.id',
      'vacancyrequests.id as vacancyrequest', 'vacancyrequests.status as vacancyrequestsStatus', 'vacancyrequests.route as vacancyrequestsRoute',
      'vacancyrequests.created_at', 'routes.name as routeName')
      .where('vacancyrequests.status', status).orderBy('vacancyrequests.created_at', 'desc');
      { ua: 'Users' }
      await trx.commit();

      return vacancyrequests

    } catch(err) {

       throw new Error(err);

    }
  }

  async show(id: string) {

    try{

      const trx = await connection.transaction();

      const vacancyrequests = await trx('vacancyrequests')
      .select()
      .where('vacancyrequests.student_id', id)

      await trx.commit();

      return vacancyrequests

    } catch(err) {

       throw new Error(err);

    }
  }

  async save(vacancy: IVacancyrequest) {

    try {

      const trx = await connection.transaction();

      const vacancyrequest = await trx('vacancyrequests').insert({
        id: vacancy.id,
        student_id: vacancy.studentid,
        route: vacancy.route,
        status: vacancy.status

      }, ['*'])

      await trx.commit();

      return vacancyrequest;

    } catch(err) {

      throw new Error(err);

    }

  }

  async update(id: string, data: string) {
    try {

      const trx = await connection.transaction();

      const updatedvancacy = await trx('vacancyrequests').where('vacancyrequests.id', '=', id)
        .update({
          status: data
        }, ['*'])

        await trx.commit();

      return updatedvancacy;


    } catch (err) {

      throw new Error(err);

    }
  }

  async amount() {
    try {

      const trx = await connection.transaction();

      const vacancy = await trx('vacancyrequests').count('*')
      .where('vacancyrequests.status', '=', 'in_progress');
      await trx.commit();

      return vacancy;

    } catch (err) {

      throw new Error(err);

    }
  }

  async amountStudentsOnQueue() {
    try {

      const trx = await connection.transaction();

      const vacancy = await trx('vacancyrequests').count('*')
      .where('vacancyrequests.status', '=', 'queue');
      await trx.commit();

      return vacancy[0].count;

    } catch (err) {

      throw new Error(err);

    }
  }
}

export { VacancyrequestData }
