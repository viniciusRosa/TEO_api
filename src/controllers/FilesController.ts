import { Request, Response, NextFunction } from 'express';
import Knex from 'knex';
import connection  from '../database/connection';
import dotenv from 'dotenv';
dotenv.config();

class FilesController {
    async index(request: Request, response: Response) {}

    async show() {}

    async create(request: Request, response: Response, next: NextFunction) {
        if (request.file) {
            const {
                originalname,
                fieldname,
                mimetype,
                destination,
                path
            } = request.file;
    
            const trx = await connection.transaction();
    
            try{
                const insertedId = await trx('files').insert({
                    originalname,
                    fieldname,
                    mimetype,
                    destination,
                    path
                }, ['id']);
                
                await trx.commit()

                request.body.imageId = String(insertedId[0].id)

                next();
            } catch(err) {
                console.log(err);
                await trx.rollback();
    
                return response.status(400).send('failure');
            }

        }

        next()

    }

    async update() {}

    async delete() {}
}

export default FilesController;

