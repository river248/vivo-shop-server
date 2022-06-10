import { ProductModel } from '../models/product'

const createNew = async (data) => await ProductModel.createNew(data)

const getAllProducts = async (condition) => await ProductModel.findAllProducts(condition)

const getProductById = async (id) => await ProductModel.findProductById(id)

export const ProductService = {
    createNew,
    getAllProducts,
    getProductById,
}
