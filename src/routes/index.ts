import { Application } from 'express';
import auth from '../authenticate';
import { userController } from '../controllers/userController';

export const routes = (app: Application) => {
    app.get('/api/user/:id', auth, userController.show);
};
