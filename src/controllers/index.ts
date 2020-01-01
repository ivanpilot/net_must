import { Request, Response } from 'express';

export const mainController = {
    index(req: Request, res: Response) {
        try {
            res.send(`Hello World`);
        } catch (e) {
            res.status(400).send('error when trying to access "/"');
        }
    },
};
