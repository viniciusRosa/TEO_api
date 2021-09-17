import { Point } from '../entities/Point';
import { PointData } from '../data/PointData';
import {v4 as uuid} from 'uuid';
import { geocodeService } from './GeocodeService';



class CreatePointService {
  async execute(
    name: string,
    address: string,
    number: string,
    district: string,
    uf: string,
    city: string
    ) {

    const geocoding = await geocodeService(address, number, city, uf);

    const point = new Point(
      uuid(),
      name,
      address,
      number,
      district,
      uf,
      city,
      geocoding.lat,
      geocoding.lng
      );

    const pointData = new PointData();

    const newPoint = await pointData.save(point);

    return newPoint;
  }
}

export { CreatePointService }
