import { Request, Response } from 'express';
import Knex from 'knex';
import connection  from '../database/connection';
import { Normalize } from '../Utils/Normalize'
import googleApi from '../services/googleApi';
import dotenv from 'dotenv';
dotenv.config();

class PointController {


    async index(request: Request, response: Response) {
       const points = await connection('points')
            .select()
       
        return response.json(points);
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;


        const school = await connection('points')
        .select()
        .where('points.id', id)

        return response.json(school);

    }

    async create(request: Request, response: Response) {
        
        const { 
            point_name, 
            address,
            number,
            district,
            complement,
            uf,
            city,
            cep,
        } = request.body;
       
         const trx = await connection.transaction();

         try {
            const coordinates = await googleApi.get(`${Normalize(address)}+${number}+${Normalize(city)}+${uf}&key=${process.env.GKEY}`);
            const { lat, lng } = coordinates.data.results[0].geometry.location
  
            await trx('points').insert({
                point_name,
                address,
                number,
                district,
                complement,
                uf,
                city,
                cep,
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

    async update(request: Request, response: Response) {

        const { id } = request.params;

        const { 
            point_name, 
            address,
            number,
            district,
            complement,
            uf,
            city,
            cep,
        } = request.body;
         const trx = await connection.transaction();

         try {
            const coordinates = await googleApi.get(`${Normalize(address)}+${number}+${Normalize(city)}+${uf}&key=${process.env.GKEY}`);
            const { lat, lng } = coordinates.data.results[0].geometry.location
            
            await trx('points')
            .where({id})
            .update({
                point_name, 
                address,
                number,
                district,
                complement,
                uf,
                city,
                cep,
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

    async delete(request: Request, response: Response) {
        const { id } = request.params;

        const trx = await connection.transaction();
        
        try{
            await trx('points').where({id}).del();
            await trx.commit()

            return response.status(200).send('ok');
        } catch(err) {
            console.log(err);
            response.status(400).send('failure')
        }
    }
}

export default PointController;

