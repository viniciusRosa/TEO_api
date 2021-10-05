import { IPoint } from '../entities/Point';
import connection from '../database/connection';
import { IData } from '../services/UpdatePointService';

class PointData {

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const point = await trx('points')
        .select('points.*')
        .where('points.id', id)

      await trx.commit();

      return point;

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
       latitude: point.latitude,
       longitude: point.longitude
      }, ['*'])

      await trx.commit();

      return newPoint;

    } catch(err) {

      throw new Error(err);

    }
  }

  async update(id: string, data: IData) {
    try {

      const trx = await connection.transaction();

      const updatedPoint = await trx('points').where('id', '=', id)
        .update({
          name: data.name,
          address: data.address,
          number: data.number,
          district: data.district,
          uf: data.uf,
          city: data.city,
        })

        await trx.commit();

      return updatedPoint;

    } catch (err) {

      throw new Error(err);

    }
  }

  async delete(id: string) {
    try {

      const trx = await connection.transaction();

      await trx('points').where('id', '=', id)
        .del()
        await trx.commit();

      return {status: 'ok'};


    } catch (err) {

      throw new Error(err);

    }
  }
}

export { PointData }
