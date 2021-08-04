import { ISchool } from '../entities/School';
import connection from '../database/connection';

class SchoolData {

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const school = await trx('schools')
        .select('schools.*')
        .where('schools.id', id)

      await trx.commit();

      return school;

    } catch (err) {

      throw new Error(err);

    }

  }

  async index() {
    try {

      const trx = await connection.transaction();

      const schools = await trx('schools')
        .select('schools.*')

      await trx.commit();

      return schools;

    } catch (err) {

      throw new Error(err);

    }

  }

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

    } catch (err) {

      throw new Error(err);

    }


  }
}

export { SchoolData }
