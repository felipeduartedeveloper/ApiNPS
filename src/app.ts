import 'reflect-metadata'
import express from 'express';
import createConnection from "./database";
import { router } from './routes';

createConnection();
const app = express();

//habilita o express a trabalhar com formato json
app.use(express.json());

app.use(router);

export { app };