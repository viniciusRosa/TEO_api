export interface INode {
  latitude: string;
  longitude: string;
}

class Node implements INode {

  latitude: string;
  longitude: string;

  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

export { Node }
