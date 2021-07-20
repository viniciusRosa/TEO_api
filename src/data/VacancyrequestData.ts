import { IVacancyrequest } from '../entities/Vacancyrequest';
import connection from '../database/connection';

class VacancyrequestData {

  async index(status: string) {

    try{

      const trx = await connection.transaction();


      const vacancyrequests = await trx('vacancyrequests')
      .join('students', 'students.id', '=', 'vacancyrequests.student_id')
      .join('schools', 'schools.id', '=', 'students.school_id')
      .select('students.image', 'students.name as student',  'schools.name as school',
      'students.shift', 'students.uf', 'students.city', 'vacancyrequests.created_at', 'students.id')
      .where('vacancyrequests.status', status);
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
      .join('users', 'users.id', '=', 'vacancyrequests.user_id')
      .join('students', 'students.user_id', '=', 'users.id')
      .join('schools', 'schools.id', '=', 'students.school_id')
      .select()
      .where('users.id', id);

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
