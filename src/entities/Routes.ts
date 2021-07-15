import { INode } from './Nodes'

export interface INodeList {
  [index:number]: INode;
}

export interface IRoute {
  vacancy: number;
  nodes: INodeList;
}

class Route implements IRoute {

  vacancy: number;
  nodes: INodeList;

  constructor(nodes: INodeList, vacancy: number) {
    this.vacancy = vacancy;
    this.nodes = nodes;
  }
}

export { Route }
