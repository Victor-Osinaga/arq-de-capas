import Router from 'express'
import * as productsControllers from '../../controllers/productsControllers/index.js'

const v1RouterProductos = new Router()

v1RouterProductos.get('/', productsControllers.getAllProductsController);
v1RouterProductos.post('/', productsControllers.createProductController);
v1RouterProductos.get('/:id', productsControllers.getProductByIdController);
v1RouterProductos.delete('/:id', productsControllers.deleteByIdController);
v1RouterProductos.put('/:id', productsControllers.updateByIdController);

export {v1RouterProductos}