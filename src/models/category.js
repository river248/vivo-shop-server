import mongoose from 'mongoose'
const Schema = mongoose.Schema
const categorySchema = new Schema(
    {
        name: String,
        type: String,
    },
    { collection: 'categories' },
)

const Category = mongoose.model('categories', categorySchema)

const createNew = async (data) => {
    const Category = new Category(data)
    return await Category.save()
}

const findAllCategories = async () => await Category.find()

const findCategoryById = async (id) => await Category.findById(id)

export const CategoryModel = {
    createNew,
    findAllCategories,
    findCategoryById,
}
