import { PointData } from '../data/PointData';
import {v4 as uuid} from 'uuid';

export interface IData {
  name: string;
  address: string;
  number: string;
  district: string;
  uf: string;
  city: string;
}

class UpdatePointService {
  async execute( id: string, data: IData) {

    // Use cases for message

    const pointData = new PointData();

    const updatePoint = await pointData.update(id, data);

    return updatePoint;
  }
}

export { UpdatePointService }
