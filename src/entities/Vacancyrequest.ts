export interface IVacancyrequest {
  userid: number;
  status: string;
}

class Vacancyrequest implements IVacancyrequest {

  userid: number;
  status: string;

  constructor(userid: number, status: string) {
    this.userid = userid;
    this.status = status;
  }
}

export { Vacancyrequest }
