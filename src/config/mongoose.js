import Mongoose from 'mongoose'
import { env } from './enviroment'

let isConnected
let db

const connectDB = async () => {
    if (isConnected) return db

    try {
        db = await Mongoose.connect(env.MONGODB_URI, {
            // useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        })
        isConnected = db.connections[0].readyState
        return db
    } catch (err) {
        throw new Error(err)
    }
}

export default connectDB
