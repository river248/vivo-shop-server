import { ProductModel } from '../models/product'

const createNew = async (data) => await ProductModel.createNew(data)

const getAllProducts = async () => await ProductModel.findAllProducts()

const getProductById = async (id) => await ProductModel.findProductById(id)

const getProductsByCategory = async (categoryID) => await ProductModel.findProductsByCategory(categoryID)

export const ProductService = {
    createNew,
    getAllProducts,
    getProductById,
    getProductsByCategory,
}
