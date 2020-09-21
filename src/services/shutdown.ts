import { Server } from 'http';
import { dbConnection } from '../services/dbConnection';

export default function gracefulShutdown(expressServer: Server): void {
    const SIGNALS: { [k: string]: number } = {
        SIGINT: 2,
        SIGTERM: 15,
    };

    Object.keys(SIGNALS).forEach(signal => {
        process.on(signal as NodeJS.Signals, () => {
            console.log(
                `Node process received a ${signal} signal with a ${SIGNALS[signal]} value`,
            );

            expressServer.close(async () => {
                try {
                    console.log('Shutting down database connections.');
                    dbConnection.close();

                    console.log('Shutting down express server.');
                    process.exit(128 + SIGNALS[signal]);
                } catch (err) {
                    console.log(
                        `Fail to terminate express server >> ${err.message}`,
                    );
                }
            });
        });
    });
}
