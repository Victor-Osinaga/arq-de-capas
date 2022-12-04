import ProductsMONGO from '../container/ProductsMONGO.js'
import productSchema from '../models/productSchema.js'

const productsDAO = new ProductsMONGO('products', productSchema)

export {
    productsDAO,
}

// const productExtend = class productsConfigDB extends MongoDB{}
// export const productsConfigDB = new productExtend('products', productSchema)