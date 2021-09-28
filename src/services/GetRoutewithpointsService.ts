import { RouteData } from '../data/RouteData';
import { RoutesPointsData } from '../data/RoutesPointsData';

class GetRoutewithpointsService {
  async execute(id: string) {

    const routeData = new RouteData();
    const routesPointsData = new RoutesPointsData();

    const route = await routeData.show(id);

    const pointsRoutes = await routesPointsData.show(route[0].id);

    route[0].points = pointsRoutes;

    return route[0];


  }
}

export { GetRoutewithpointsService }
