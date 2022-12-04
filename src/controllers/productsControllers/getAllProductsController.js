import * as productsServices from '../../services/productsServices/index.js'

const getAllProductsController = async (req, res)=> {
    try {
        const allProductos = await productsServices.getAllProductsService();
        res.send({ staus: 'OK', data: allProductos })
    } catch (error) {
        console.log(error);
        res.status(500).send({status: "failed", data: {error: "database error"}})
    }
}

export {getAllProductsController}