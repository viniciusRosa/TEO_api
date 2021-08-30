import { PointData } from '../data/PointData';

class GetPointsService {
  async execute() {

    // Use cases for message

    const pointsData = new PointData();

    const points = await pointsData.index();

    return points;
  }
}

export { GetPointsService }
