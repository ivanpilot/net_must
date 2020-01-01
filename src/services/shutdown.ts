import { Server } from 'http';
import { dbConnection } from '../services/dbConnection';
import { logger } from './logger';

export default function gracefulShutdown(expressServer: Server): void {
    const SIGNALS: { [k: string]: number } = {
        SIGINT: 2,
        SIGTERM: 15,
    };

    Object.keys(SIGNALS).forEach(signal => {
        process.on(signal as NodeJS.Signals, () => {
            logger.warn(
                `Node process received a ${signal} signal with a ${SIGNALS[signal]} value`,
            );

            expressServer.close(async () => {
                try {
                    logger.info('Shutdown process initialized.');

                    logger.info('Shutting down database connections.');
                    dbConnection.close();

                    logger.info('Shutting down express server.');
                    logger.info(
                        'All services successfully shut down. Bye now!',
                    );
                    process.exit(128 + SIGNALS[signal]);
                } catch (err) {
                    logger.error(
                        `Fail to terminate express server >> ${err.message}`,
                    );
                }
            });
        });
    });
}
