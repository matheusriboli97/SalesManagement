import knex from '../database/connection'
import { Request, Response} from 'express'

class ProductsController {

    async create (request: Request, response: Response) {

        const {name , price} = request.body;
    
        await knex('products').insert({
            name,
            price
        });
    
        return response.json({success: true});
    }

    async update (request: Request, response: Response){

        const {id} = request.params;
        const {name , price} = request.body;
    
        await knex('products')
        .where({ id: id })
        .update({ name: name }, ['id', 'name']);
    
        await knex('products')
        .where({ id: id })
        .update({ price: price }, ['id', 'price']);
    
        return response.json({message: 'success'});
        
    }

    async index (request: Request, response: Response){

        const items =  await knex('products').select('*')
        return response.json(items);
        
    }


}

export default ProductsController;