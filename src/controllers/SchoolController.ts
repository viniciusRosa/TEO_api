import { Request, Response } from 'express';
import connection  from '../database/connection';

class SchoolController {
    async index() {}

    async show() {}

    async create(request: Request, response: Response) {
        console.log(request)
       response.status(200).send('ok')
    }

    async update() {}

    async delete() {}
}

export default SchoolController;

