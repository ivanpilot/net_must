import bodyParser from 'body-parser';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { logger } from './services/logger';

const app: Application = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    try {
        logger.info('All is ok.');
        res.send('Welcome');
    } catch (e) {
        res.status(400).send('error when trying to access "/"');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
