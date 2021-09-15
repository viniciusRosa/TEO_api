import { ISchool } from '../entities/School';
import connection from '../database/connection';
import { IData } from '../services/UpdateSchoolService';

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
      }, ['*'])

      await trx.commit();

      return newSchool;

    } catch (err) {

      throw new Error(err);

    }
  }

  async update(id: string, data: IData) {
    try {

      const trx = await connection.transaction();

      const updatedSchool = await trx('schools').where('id', '=', id)
        .update({
          name: data.name,
          address: data.address,
          number: data.number,
          district: data.district,
          complement: data.complement,
          uf: data.uf,
          city: data.city,
          cep: data.cep,
          email: data.email,
          phone: data.phone,
        })

        await trx.commit();

      return updatedSchool;


    } catch (err) {

      throw new Error(err);

    }
  }

  async delete(id: string) {
    try {

      const trx = await connection.transaction();

      await trx('schools').where('id', '=', id)
        .del()
        await trx.commit();

      return {status: 'ok'};


    } catch (err) {

      throw new Error(err);

    }
  }
}

export { SchoolData }
