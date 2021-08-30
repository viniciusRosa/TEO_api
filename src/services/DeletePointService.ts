import { PointData } from '../data/PointData';

class DeletePointService {
  async execute( id: string) {

    // Use cases for message

    const pointData = new PointData();

    const deletePoint = await pointData.delete(id);

    return deletePoint;
  }
}

export { DeletePointService }
