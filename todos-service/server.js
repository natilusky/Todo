import express from 'express'
import cors from 'cors'
import route from './routes/index.js'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import { startCronJob } from './cron/cronJob.js';
import { errorHandler, notFound } from "./middleware/errorMiddlware.js";

dotenv.config()

const app = express();

app.use(express.json());

app.use(cors());

startCronJob();

await connectDB();

app.use('/api', route);

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))