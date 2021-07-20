export interface IRoute {
  id: string;
  name: string;
  vacancy: number;
  shift: string;
}

class Route implements IRoute {

  id: string;
  name: string;
  vacancy: number;
  shift: string;

  constructor(id: string, name: string, vacancy: number, shift: string) {
    this.id = id;
    this.name = name;
    this.vacancy = vacancy;
    this.shift = shift;
  }
}

export { Route }
