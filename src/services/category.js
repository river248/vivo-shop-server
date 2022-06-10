import { CategoryModel } from '../models/category'

const createNew = async (data) => await CategoryModel.createNew(data)

const getAllCategories = async (condition) => await CategoryModel.findAllCategories(condition)

const getCategoryById = async (id) => await CategoryModel.findCategoryById(id)

export const CategoryService = {
    createNew,
    getAllCategories,
    getCategoryById,
}
