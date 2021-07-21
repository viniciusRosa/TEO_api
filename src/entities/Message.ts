export interface IMessage {
  id: string;
  fromId: string;
  toId: string;
  message: string
}

class Message implements IMessage {

  id: string;
  fromId: string;
  toId: string;
  message: string;

  constructor(id: string, fromId: string, toId: string, message: string) {
    this.id = id;
    this.fromId = fromId;
    this.toId = toId;
    this.message = message;
  }
}

export { Message }
