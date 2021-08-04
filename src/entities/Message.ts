export interface IMessage {
  id: string;
  vacancyrequestId: string;
  fromId: string;
  toId: string;
  message: string
}

class Message implements IMessage {

  id: string;
  vacancyrequestId: string;
  fromId: string;
  toId: string;
  message: string;

  constructor(id: string,   vacancyrequestId: string, fromId: string, toId: string, message: string) {
    this.id = id;
    this.vacancyrequestId = vacancyrequestId;
    this.fromId = fromId;
    this.toId = toId;
    this.message = message;
  }
}

export { Message }
