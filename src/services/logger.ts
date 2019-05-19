import winston, { format } from 'winston';

export const logger = winston.createLogger({
    format: format.combine(
        format.label({ label: 'Server App' }),
        format.timestamp(),
        format.prettyPrint(),
    ),
    level: 'info',
    transports: [new winston.transports.Console()],
});
