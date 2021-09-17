import { RouteData } from '../data/RouteData';
import { RoutesPointsData } from '../data/RoutesPointsData';

class GetRoutesService {
  async execute() {

    // Use cases for message

    const routeData = new RouteData();
    const routesPointsData = new RoutesPointsData();
    const routes = await routeData.index();
    const pointsRoutes = await routesPointsData.index();

    return routes.map(route => {

      const points = pointsRoutes.filter((point, index) => {
        if(point.route_id === route.id) {

          return point;

        }
      })

    return ({...route, points: points})
  })

  }
}

export { GetRoutesService }
