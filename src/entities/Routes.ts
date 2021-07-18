export interface INodeList {
  [index:number]: string;
}

export interface IRoute {
  id: string
  vacancy: number;
  shift: string;
  nodes: INodeList;
}

class Route implements IRoute {

  id: string
  vacancy: number;
  shift: string;
  nodes: INodeList;

  constructor(id: string, vacancy: number, shift: string, nodes: INodeList) {
    this.id = id;
    this.vacancy = vacancy;
    this.shift = shift;
    this.nodes = nodes;
  }
}

export { Route }
