import 'reflect-metadata'
import express from 'express';
import "./database";
import { router } from './routes';
const app = express();

//habilita o express a trabalhar com formato json
app.use(express.json());

app.use(router);

export { app };