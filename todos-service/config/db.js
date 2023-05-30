import mongoose from 'mongoose'
import logger from '../logger/index.js'

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE,
            {
                maxPoolSize: 20,
                wtimeoutMS: 120000
            }
        )
        logger.info(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        process.exit(1)
    }
}

export default connectDB