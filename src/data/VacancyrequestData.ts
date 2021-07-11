import { IVacancyrequest } from '../entities/Vacancyrequest';
import connection from '../database/connection';

class VacancyrequestData {

  async index() {

    try{

      const trx = await connection.transaction();

      const vacancyrequests = await trx('vacancyrequests')
      .join('users', 'users.id', '=', 'vacancyrequests.user_id')
      .join('students', 'students.user_id', '=', 'users.id')
      .join('schools', 'schools.id', '=', 'students.school_id')
      .select('students.image', 'users.name', 'schools.school_name',
              'students.shift', 'students.uf', 'students.city', 'vacancyrequests.created_at', 'users.id');

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

//   SELECT va.*, us.*, st.*
// FROM public.vacancyrequests va
// join public.users us
// on us.id = va.user_id
// join public.students st
// on st.user_id = us.id ;


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
