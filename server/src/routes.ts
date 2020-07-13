import express from 'express';
import knex from './database/connection';
import ClientsController from './controllers/clientsController'
import ProductsController from './controllers/productsController';
import SellsController from './controllers/sellsController';

const routes = express.Router();

const clientsController = new ClientsController();
const productsController = new ProductsController();
const sellsController = new SellsController();

routes.post('/clients', clientsController.create);
routes.get('/clients', clientsController.index );
routes.get('/clients/:phone', clientsController.show );

routes.post('/products', productsController.create);
routes.put('/products/:id', productsController.update);
routes.get('/products', productsController.index);

routes.post('/sells', sellsController.create);
routes.get('/sells/:id', sellsController.index);


export default routes;