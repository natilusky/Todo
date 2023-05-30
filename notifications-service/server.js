import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { startConsumer } from './rabbitmq/consumer.js';
import { errorHandler, notFound } from "./middleware/errorMiddlware.js";

dotenv.config()

const app = express();

app.use(express.json());

app.use(cors());

startConsumer();

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))