import { IPoint } from '../entities/Point';
import connection from '../database/connection';

class PointData {

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const school = await trx('points')
        .select('points.*')
        .where('points.id', id)

      await trx.commit();

      return school;

    } catch (err) {

      throw new Error(err);

    }

  }

  async index() {
    try {

      const trx = await connection.transaction();

      const points = await trx('points')
        .select('points.*')

      await trx.commit();

      return points;

    } catch (err) {

      throw new Error(err);

    }
  }

  async save(point: IPoint) {

    try {

      const trx = await connection.transaction();

      const newPoint = await trx('points').insert({
       id: point.id,
       name: point.name,
       address: point.address,
       number: point.number,
       district: point.district,
       uf: point.uf,
       city: point.city,
      }, ['id'])

      await trx.commit();

      return newPoint;

    } catch(err) {

      throw new Error(err);

    }
  }

  
}

export { PointData }
