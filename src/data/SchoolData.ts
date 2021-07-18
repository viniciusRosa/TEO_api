import { ISchool } from '../entities/School';
import connection from '../database/connection';

class SchoolData {

  async save(school: ISchool) {

    try {

      const trx = await connection.transaction();

      const newSchool = await trx('schools').insert({
       id: school.id,
       name: school.name,
       address: school.address,
       number: school.number,
       district: school.district,
       complement: school.complement,
       uf: school.uf,
       city: school.city,
       cep: school.cep,
       email: school.email,
       phone: school.phone,
       point_id: school.pointId
      }, ['id'])

      await trx.commit();

      return newSchool;

    } catch(err) {

      throw new Error(err);

    }


  }
}

export { SchoolData }
