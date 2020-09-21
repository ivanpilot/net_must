import { Server } from 'http';
import { app } from './app';
import { dbConnection } from './services/dbConnection';

import gracefulShutdown from './services/shutdown';

export let server: Server;

(async () => {
    await dbConnection.open();
    app.emit('ready');
})();

app.on('ready', () => {
    server = app.listen(process.env.PORT || 5000, () =>
        console.log(`Listening on port ${process.env.PORT || 5000}`),
    );

    gracefulShutdown(server);
});
