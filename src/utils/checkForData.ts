import { Response } from 'express';

export default (data: string[], res: Response) => {
    if (data === undefined || data.length === 0) {
        return res.status(403).json({ Status: 'True', Data: [] });
    }
};
