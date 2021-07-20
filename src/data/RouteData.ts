import { IRoute } from '../entities/Route';
import connection from '../database/connection';

class RouteData {

  async save(route: IRoute) {

    try {

      const trx = await connection.transaction();

      const newRoute = await trx('routes').insert({
       id: route.id,
       name: route.name,
       vacancy: route.vacancy,
       shift: route.shift
      }, ['id'])

      await trx.commit();

      return newRoute;

    } catch(err) {

      throw new Error(err);

    }
  }
}

export { RouteData }
