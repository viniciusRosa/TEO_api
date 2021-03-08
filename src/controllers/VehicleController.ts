import { Request, Response } from 'express';
import Knex from 'knex';
import connection  from '../database/connection';
import dotenv from 'dotenv';
dotenv.config();

class VehicleController {


    async index(request: Request, response: Response) {
       const vehicle = await connection('vehicles').select()
       
        return response.json(vehicle);
    }

    async show(request: Request, response: Response) {

        const { id } = request.params;


        const school = await connection('vehicles')
        .select()
        .where('vehicles.id', id)

        return response.json(school);

    }

    async create(request: Request, response: Response) {
        
        const { 
            vehicle_name, 
            doc_number,
            seats,
        } = request.body;
       
         const trx = await connection.transaction();

         try {
            
            await trx('vehicles').insert({
                vehicle_name,
                doc_number,
                seats: Number(seats),
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
            vehicle_name, 
            doc_number,
            seats,
        } = request.body;
         const trx = await connection.transaction();

         try {
             
            await trx('vehicles')
            .where({id})
            .update({
                vehicle_name,
                doc_number,
                seats,
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
            const imageID = await trx('vehicles').where({id}).del();
            await trx.commit()

            return response.status(200).send('ok');
        } catch(err) {
            console.log(err);
            response.status(400).send('failure')
        }
    }
}

export default VehicleController;

