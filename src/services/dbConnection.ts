const db = require('../helperFunctions/sqlConnection');

class DBConnection {
    private db: any;

    public async open(): Promise<void> {
        try {
            this.db = await db.connection
                .once('open', () =>
                    console.log('Connection to the database successful'),
                )
                .on('error', (err: Error) => {
                    console.log(
                        `Error connecting to the database: ${err.message}`,
                    );
                });
        } catch (error) {
            console.log(
                `Error while attempting initial connection to the database >> ${error.message}`,
            );

            process.exit(1);
        }
    }

    public async close(): Promise<void> {
        try {
            await this.db.close();
        } catch (error) {
            console.log(
                `Error while attempting to close database connection >> ${error.message}`,
            );
        }
    }
}

export const dbConnection = new DBConnection();
