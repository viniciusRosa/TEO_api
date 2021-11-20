import connection from '../database/connection';

class RoutesPointsData {

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const routesPoints = await trx('routes_points')
      .join('points', 'routes_points.point_id', '=', 'points.id')
      .select('routes_points.*', 'points.*')
      .where('routes_points.route_id', id)

      await trx.commit();

      return routesPoints;

    } catch (err) {

      throw new Error(err);

    }
  }

  async index() {
    try {

      const trx = await connection.transaction();

      const routesPoints = await trx('routes_points')
        .join('points', 'routes_points.point_id', '=', 'points.id')
        .select('routes_points.*', 'points.*')

      await trx.commit();

      return routesPoints;

    } catch (err) {

      throw new Error(err);

    }
  }

  async save(id: string, route: string, point: string) {

    try {

      const trx = await connection.transaction();

      const newRoutePoint = await trx('routes_points').insert({
       id: id,
       route_id: route,
       point_id: point,
      }, ['*'])

      await trx.commit();

      return newRoutePoint;

    } catch(err) {

      throw new Error(err);

    }
  }

}

export { RoutesPointsData };
