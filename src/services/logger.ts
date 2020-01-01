import winston, { format } from 'winston';
const myFormat = format.printf(info => {
    return `${info.label} | ${info.level} ${info.message} | ${info.timestamp}`;
});

export const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.label({ label: 'Api Server' }),
        winston.format.timestamp(),
        winston.format.prettyPrint(),
        winston.format.json(),
    ),
    level: 'silly',
    transports: [new winston.transports.Console()],
});

if (process.env.NODE_ENV !== 'production') {
    logger.clear().add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.label({ label: 'Api Server' }),
                winston.format.timestamp(),
                myFormat,
            ),
        }),
    );
}
