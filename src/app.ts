import bodyParser from 'body-parser';
import express, { Application } from 'express';
import helmet from 'helmet';
import { routes } from './routes';

export const app: Application = express();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);
