import { Request, Response } from 'express';
import Knex from 'knex';
import connection  from '../database/connection';
import Normalize from '../Utils/Normalize'
import googleApi from '../services/googleApi';
import dotenv from 'dotenv';
dotenv.config();

class SchoolController {
    async index(request: Request, response: Response) {
        const schools = await connection.select().table('schools')

        return response.json(schools);
    }

    async show() {}

    async create(request: Request, response: Response) {
        
        const { 
            school_name, 
            address,
            number,
            district,
            complement,
            uf,
            city,
            cep,
            email,
            phone_number,
            imageId
        } = request.body;
       
         const trx = await connection.transaction();

         try {
            const coordinates = await googleApi.get(`${Normalize(address)}+${number}+${Normalize(city)}+${uf}&key=${process.env.GKEY}`);

            const { lat, lng } = coordinates.data.results[0].geometry.location


            
            await trx('schools').insert({
                school_name,
                image: imageId,
                address,
                number,
                district,
                complement,
                uf,
                city,
                cep,
                email,
                phone_number,
                latitude: lat,
                longitude: lng
            })
    
             await trx.commit();

             return response.status(200).send('ok')

         } catch(err) {
             console.log(err);
             await trx.rollback();
             
             response.status(400).send('failure')
         }        
    }

    async update() {}

    async delete() {}
}

export default SchoolController;

