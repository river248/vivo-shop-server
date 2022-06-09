import mongoose from 'mongoose'
const Schema = mongoose.Schema
const productSchema = new Schema(
    {
        name: String,
        categoryID: String,
        thumbnail: String,
        description: String,
        price: Number,
        sizes: [{ name: String, soldOut: { type: Boolean, default: false } }],
        soldOut: { type: Boolean, default: false },
    },
    { collection: 'products' },
)

const Product = mongoose.model('products', productSchema)

const createNew = async (data) => {
    const product = new Product(data)
    return await product.save()
}

const findAllProducts = async () => await Product.find()

const findProductById = async (id) => await Product.findById(id)

export const ProductModel = {
    createNew,
    findAllProducts,
    findProductById,
}
