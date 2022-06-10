import mongoose from 'mongoose'
const Schema = mongoose.Schema

const sizeChema = new Schema({ name: String, soldOut: { type: Boolean, default: false } }, { _id: false })

const productSchema = new Schema(
    {
        name: String,
        categoryID: Schema.Types.ObjectId,
        thumbnail: String,
        status: { type: String, default: 'NOR' },
        description: String,
        price: Number,
        sizes: [sizeChema],
        soldOut: { type: Boolean, default: false },
    },
    { collection: 'products' },
)

const Product = mongoose.model('products', productSchema)

const createNew = async (data) => {
    const product = new Product(data)
    return await product.save()
}

const findAllProducts = async (condition = null) =>
    condition === null ? await Product.find() : await Product.find(condition)

const findProductById = async (id) => await Product.findById(id)

export const ProductModel = {
    createNew,
    findAllProducts,
    findProductById,
}
