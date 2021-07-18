import { Point } from '../entities/Point';
import { PointData } from '../data/PointData';
import {v4 as uuid} from 'uuid';


class CreatePointService {
  async execute(
    name: string,
    address: string,
    number: string,
    district: string,
    uf: string,
    city: string
    ) {

    // Use cases for point

    // get latitude and longitude

    const latitude = 123123
    const longitude = 3534535

    const point = new Point(
      uuid(),
      name,
      address,
      number,
      district,
      uf,
      city,
      latitude,
      longitude
      );

    const pointData = new PointData();

    const newPoint = await pointData.save(point);

    return newPoint;
  }
}

export { CreatePointService }
