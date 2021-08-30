import { RouteData } from '../data/RouteData';

class GetRouteService {
  async execute(id: string) {

    // Use cases for message

    const routeData = new RouteData();

    const route = await routeData.show(id);

    return route;
  }
}

export { GetRouteService }
