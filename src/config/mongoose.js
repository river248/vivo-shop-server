import Mongoose from 'mongoose'
import { env } from './enviroment'

let isConnected
let db

const connectDB = async () => {
    if (isConnected) return db

    try {
        db = await Mongoose.connect(`${env.MONGODB_URI}/${env.DATABASE_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = db.connections[0].readyState
        return db
    } catch (err) {
        throw new Error(err)
    }
}

export default connectDB
