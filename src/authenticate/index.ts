import { NextFunction, Request, Response } from 'express';

export default function auth(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    //authenticate user
    next();
}
