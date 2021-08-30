import { RouteData } from '../data/RouteData';

class DeleteRouteService {
  async execute( id: string) {

    // Use cases for message

    const routeData = new RouteData();

    const deletedRoute = await routeData.delete(id);

    return deletedRoute;
  }
}

export { DeleteRouteService }
