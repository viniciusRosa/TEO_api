import { RouteData } from '../data/RouteData';

class GetRoutesService {
  async execute() {

    // Use cases for message

    const routeData = new RouteData();

    const routes = await routeData.index();

    return routes;
  }
}

export { GetRoutesService }
