import mongoose, { Connection } from 'mongoose';
import { keys } from '../config';
import { logger } from './logger';

class DBConnection {
    private db: Connection;

    public async open(): Promise<void> {
        try {
            /* When single instance to run mongodb in normal mode*/
            await mongoose.connect(
                // `mongodb://mongodb:${keys.DB_PORT}`,
                `mongodb://${keys.DB_HOST}:${keys.DB_PORT}`,
                {
                    dbName: keys.DB_NAME,
                    useFindAndModify: false,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                },
            );

            this.db = mongoose.connection
                .once('open', () =>
                    logger.silly('Connection to the database successful'),
                )
                .on('error', (err: Error) => {
                    logger.error(
                        `Error connecting to the database: ${err.message}`,
                    );
                });
        } catch (error) {
            logger.error(
                `Error while attempting initial connection to the database >> ${error.message}`,
            );
            logger.info('Exiting program with a non zero exit code');
            process.exit(1);
        }
    }

    public async close(): Promise<void> {
        try {
            await this.db.close();
        } catch (error) {
            logger.error(
                `Error while attempting to close database connection >> ${error.message}`,
            );
        }
    }
}

export const dbConnection = new DBConnection();
