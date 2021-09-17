import { IRoute } from '../entities/Route';
import connection from '../database/connection';
import { IData } from '../services/UpdateRouteService';

class RouteData {

  async show(id: string) {
    try {

      const trx = await connection.transaction();

      const route = await trx('routes')
        .select('routes.*')
        .where('routes.id', id)

      await trx.commit();

      return route;

    } catch (err) {

      throw new Error(err);

    }

  }

  async index() {
    try {

      const trx = await connection.transaction();

      const routes = await trx('routes')
        .select('routes.*')

      // const routes = await trx.raw('SELECT r.*, p.* FROM public.routes r left join public.routes_points p on r.id = p.route_id where r.id in(select id from public.routes) group by p.id, r.id;')

      await trx.commit();

      return routes;

    } catch (err) {

      throw new Error(err);

    }

  }

  async save(route: IRoute) {

    try {

      const trx = await connection.transaction();

      const newRoute = await trx('routes').insert({
       id: route.id,
       name: route.name,
       vacancy: route.vacancy,
       shift: route.shift
      }, ['*'])

      await trx.commit();

      return newRoute;

    } catch(err) {

      throw new Error(err);

    }
  }

  async update(id: string, data: IData) {
    try {

      const trx = await connection.transaction();

      const updatedSchool = await trx('routes').where('id', '=', id)
        .update({
          name: data.name,
          vacancy: data.vacancy,
          shift: data.shift
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

      await trx('routes').where('id', '=', id)
        .del()
        await trx.commit();

      return {status: 'ok'};


    } catch (err) {

      throw new Error(err);

    }
  }
}

export { RouteData }
