import { PointData } from '../data/PointData';

class GetPointService {
  async execute(id: string) {

    // Use cases for message

    const pointData = new PointData();

    const point = await pointData.show(id);

    return point;
  }
}

export { GetPointService }
