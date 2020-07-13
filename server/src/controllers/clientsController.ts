import knex from '../database/connection'
import { Request, Response} from 'express'

class ClientsController {

    async create (request: Request, response: Response) {
    
        const {name, adress, number, city, phone} = request.body;
        await knex('clients').insert({name, adress, number, city, phone});
        return response.json({success: true});
        
    }

    async index (request: Request, response: Response){

        const clients =  await knex('clients').select('*')
        return response.json(clients);
        
    }

    async show (request: Request, response: Response) {
        const { phone } = request.params;
    
        const client = await knex('clients').where('phone', phone).first();
    
        if(!client){
            return response.status(400).json({message: 'Client not found'})
        }
    
        return response.json(client);
    }

}

export default ClientsController;