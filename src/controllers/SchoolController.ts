import { Request, Response } from 'express';
import Knex from 'knex';
import connection  from '../database/connection';

class SchoolController {
    async index() {}

    async show() {}

    async create(request: Request, response: Response) {
       
        const { 
            phone_number,
            email,
            complement,
            district,
            number,
            street,
            school_name 
         } = request.body;

         const trx = await connection.transaction();

         const school = {
            school_name,
            street,
            number,
            district,
            complement,
            email,
            phone_number,
            latitude: 234234,
            longitude: 234234
         };

         try {
             const insertedSchool = await trx('schools').insert(school);
             await trx.commit();

             return response.status(200).json({insertedSchoolIs: insertedSchool[0]});

         } catch(err) {
             console.log(err);
             await trx.rollback();
         }


       
        // response.status(200).send('ok')
    }

    async update() {}

    async delete() {}
}

export default SchoolController;

