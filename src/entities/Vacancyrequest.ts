export interface IVacancyrequest {
  id: string
  studentid: string;
  status: string;
}

class Vacancyrequest implements IVacancyrequest {

  id: string
  studentid: string;
  status: string;

  constructor(id: string, studentid: string, status: string) {
    this.id = id
    this.studentid = studentid;
    this.status = status;
  }
}

export { Vacancyrequest }
