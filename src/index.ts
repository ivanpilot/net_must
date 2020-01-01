import { Server } from 'http';
import { app } from './app';
import { dbConnection } from './services/dbConnection';
import { logger } from './services/logger';
import gracefulShutdown from './services/shutdown';

export let server: Server;

logger.silly(`environment is ${process.env.NODE_ENV}`);
logger.silly(
    `PORT env variable is ${process.env.PORT ? process.env.PORT : 'undefined'}`,
);

(async () => {
    await dbConnection.open();
    app.emit('ready');
})();

app.on('ready', () => {
    server = app.listen(process.env.PORT || 5000, () =>
        logger.silly(`Listening on port ${process.env.PORT || 5000}`),
    );

    gracefulShutdown(server);
});
