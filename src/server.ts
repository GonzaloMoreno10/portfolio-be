import express, { Application } from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import { StoreOptions } from './config/store';
import log4js from 'log4js';
import { log4jsConfig } from './config/log4js';
import conexion from './config/database';
import { mainRouter } from './routes/main';

dotenv.config();

log4js.configure(log4jsConfig);

conexion();

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

app.use(session(StoreOptions));

app.use('/api', mainRouter);

app.use(express.urlencoded({ extended: true }));

export default app;
