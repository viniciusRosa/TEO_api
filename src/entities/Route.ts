export interface IRoute {
  id: string;
  name: string;
  vacancy: number;
  shift: string;
  time: string;
}

class Route implements IRoute {

  id: string;
  name: string;
  vacancy: number;
  shift: string;
  time: string

  constructor(id: string, name: string, vacancy: number, shift: string, time: string) {
    this.id = id;
    this.name = name;
    this.vacancy = vacancy;
    this.shift = shift;
    this.time = time;
  }
}

export { Route }
