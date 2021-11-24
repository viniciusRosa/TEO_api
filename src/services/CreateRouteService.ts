import { Route } from '../entities/Route';
import { RouteData } from '../data/RouteData';
import { RoutesPointsData } from '../data/RoutesPointsData';
import {v4 as uuid} from 'uuid';


class CreateRouteService {
  async execute(
    name: string,
    vacancy: number,
    shift: string,
    time: string,
    points: any[]
    ) {

    // Use cases for routes
    const routeData = new RouteData();
    const routePointsData = new RoutesPointsData();
    // get latitude and longitude

    const route = new Route(
      uuid(),
      name,
      vacancy,
      shift,
      time
      );

    points.map(async (point, index) => {
      const response = await routePointsData.save(uuid(), route.id, point, index);
    })



    const newRoute = await routeData.save(route);

    return newRoute;
  }
}

export { CreateRouteService }
