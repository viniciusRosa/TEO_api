export interface IVacancyrequest {
  id: string
  studentid: string;
  status: string;
  route: string;
}

class Vacancyrequest implements IVacancyrequest {

  id: string
  studentid: string;
  status: string;
  route: string;

  constructor(id: string, studentid: string, status: string, route: string) {
    this.id = id
    this.studentid = studentid;
    this.status = status;
    this.route = route;
  }
}

export { Vacancyrequest }
