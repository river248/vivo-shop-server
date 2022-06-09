import { ProductModel } from '../models/product'

const createNew = async (data) => await ProductModel.createNew(data)

const getAllProducts = async () => await ProductModel.findAllProducts()

const getProductById = async (id) => await ProductModel.findProductById(id)

export const ProductService = {
    createNew,
    getAllProducts,
    getProductById,
}
