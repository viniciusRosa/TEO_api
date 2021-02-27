import { Request, Response, NextFunction } from 'express';
import connection  from '../database/connection';
import dotenv from 'dotenv';
dotenv.config();

class FilesController {
    async index(request: Request, response: Response) {}

    async show() {}

    async create(request: Request, response: Response, next: NextFunction) {
        if (request.file) {
            const {
                filename,
                originalname,
                fieldname,
                mimetype,
                destination,
                path
            } = request.file;
    
            const trx = await connection.transaction();
    
            try{
                const insertedId = await trx('files').insert({
                    filename,
                    originalname,
                    fieldname,
                    mimetype,
                    destination,
                    path
                }, ['id']);
                
                await trx.commit()

                request.body.imageId = String(insertedId[0].id)

                return next();
            } catch(err) {
                console.log(err);
                await trx.rollback();
    
                return response.status(400).send('failure');
            }
        }
        request.body.imageId = '1'
        next();

    }

    async update() {}

    async delete(request: Request, response: Response) {
        
    }
}

export default FilesController;

