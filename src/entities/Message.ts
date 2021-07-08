export interface IMessage {
  fromId: number;
  toId: number;
  message: string
}

class Message implements IMessage {

  fromId: number;
  toId: number;
  message: string;

  constructor(fromId: number, toId: number, message: string) {
    this.fromId = fromId;
    this.toId = toId;
    this.message = message;
  }
}

export { Message }
