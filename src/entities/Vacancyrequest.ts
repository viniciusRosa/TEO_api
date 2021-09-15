export interface IVacancyrequest {
  id: string
  studentid: string;
  route: string;
  status: string;
}

class Vacancyrequest implements IVacancyrequest {

  id: string
  studentid: string;
  route: string;
  status: string;

  constructor(id: string, studentid: string, route: string, status: string ) {
    this.id = id
    this.studentid = studentid;
    this.route = route;
    this.status = status;
  }
}

export { Vacancyrequest }
