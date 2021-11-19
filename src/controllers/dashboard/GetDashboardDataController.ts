import { Request, Response } from 'express';
import { SchoolData } from '../../data/SchoolData';

class GetDashboardDataController {

  async schoolAmount(request: Request, response: Response) {

    const schoolData = new SchoolData();

    const schoolamount = await schoolData.amount();
    console.log(schoolamount)

    return response.json(schoolamount[0].count)
  }
}

export { GetDashboardDataController }
