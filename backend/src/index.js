import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import { configDatabase } from './config/configDatabase.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

await configDatabase();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});