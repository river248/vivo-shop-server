import mongoose from 'mongoose'

export const connectDB = mongoose.connect(process.env.MONG_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
