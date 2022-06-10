import { CategoryModel } from '../models/category'

const createNew = async (data) => await CategoryModel.createNew(data)

const getAllCategories = async () => await CategoryModel.findAllCategories()

const getCategoryById = async (id) => await CategoryModel.findCategoryById(id)

export const CategoryService = {
    createNew,
    getAllCategories,
    getCategoryById,
}
