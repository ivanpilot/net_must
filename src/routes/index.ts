import { Application } from 'express';
import { mainController } from '../controllers';

export const routes = (app: Application) => {
    app.get('/', mainController.index);
};
