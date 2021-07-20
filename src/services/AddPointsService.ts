import { Route } from '../entities/Route';
import { RouteData } from '../data/RouteData';
import {v4 as uuid} from 'uuid';

interface IRoutePoint {
  point: {
    routeId: string,
    pointId: string
  }
}

class AddPointsService {
  async execute(
    points: [IRoutePoint]
    ) {

    // Use cases for routes

    points.map((point) => {
      console.log(point.point.pointId)
      console.log(point.point.routeId)
    })

    // get latitude and longitude

  }
}

export { AddPointsService }
