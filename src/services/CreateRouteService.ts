import { Route } from '../entities/Route';
import { RouteData } from '../data/RouteData';
import {v4 as uuid} from 'uuid';


class CreateRouteService {
  async execute(
    name: string,
    vacancy: number,
    shift: string
    ) {

    // Use cases for routes

    // get latitude and longitude

    const route = new Route(
      uuid(),
      name,
      vacancy,
      shift
      );

    const routeData = new RouteData();

    const newRoute = await routeData.save(route);

    return newRoute;
  }
}

export { CreateRouteService }
