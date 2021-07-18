export interface IPoint {
  id: string;
  name: string;
  address: string,
  number: string,
  district: string,
  uf: string,
  city: string,
  latitude: number;
  longitude: number;
}

class Point implements IPoint {

  id: string;
  name: string;
  address: string;
  number: string;
  district: string;
  uf: string;
  city: string;
  latitude: number;
  longitude: number;

  constructor(id: string, name: string, address: string, number: string,
    district: string, uf: string, city: string, latitude: number, longitude: number) {
    this.id = id
    this.name = name;
    this.address = address;
    this.number = number;
    this.district = district;
    this.uf = uf;
    this.city = city;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export { Point }
