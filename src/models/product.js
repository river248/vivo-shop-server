import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: String,
    // categoryID: mongoose.SchemaTypes.ObjectId,
    // thumbnail: String,
    // description: String,
    // price: Number,
    // sizes: [{ name: String, soldOut: Boolean }],
    // soldOut: Boolean,
})

export const ProductModel = mongoose.model('products', productSchema)
