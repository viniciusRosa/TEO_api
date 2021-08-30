import { RouteData } from '../data/RouteData';

export interface IData {
  name: string;
  vacancy: string;
  shift: string;
}

class UpdateRouteService {
  async execute( id: string, data: IData) {

    // Use cases for message

    const routeData = new RouteData();

    const updateRoute = await routeData.update(id, data);

    return updateRoute;
  }
}

export { UpdateRouteService }
