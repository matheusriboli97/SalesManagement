import knex from '../database/connection'
import { Request, Response} from 'express'

class SellsController {

    async create (request: Request, response: Response) {
        const { client_id, products_id, delivered} = request.body;
          
        const trx = await knex.transaction();

        const sellsid = await trx('sells').insert({
            delivered,
            client_id,
            products_id
        })

        const clientProductSell = {
            sells_id: sellsid[0], 
            client_id,
            products_id
        }

        await trx('client_products_sells').insert(clientProductSell);
        
        trx.commit();

        return response.json(sellsid[0]);
    }

    async index (request: Request, response: Response) {

        const { id } = request.params;

        const sells = await knex('sells').where('id', id).first()

        const clients = await knex('clients')
        .join('client_products_sells', 'clients.id', '=', 'client_products_sells.client_id')
        .where('client_products_sells.sells_id', id)
        .select('clients.name');
        
        const products = await knex('products')
        .join('client_products_sells', 'products.id', '=', 'client_products_sells.products_id')
        .where('client_products_sells.sells_id', id)
        .select('products.name');


        return response.json({sells, clients, products});
    }

}

export default SellsController;