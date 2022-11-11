import express from 'express';
import dotenv from 'dotenv';
import { cityRouter } from './routes/city.routes.js';

dotenv.config();

const port: number = Number(process.env.EXPRESS_PORT) | 8000;

const app = express();

app.use('/weather', cityRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}...`);
});
