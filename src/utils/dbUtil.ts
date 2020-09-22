const connection = require('../helperFunctions/sqlConnection').connection;

export function ExecuteQuery(sql: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        connection.connect(err => {
            console.log(sql);
            connection.query(sql, (err, result) => {
                if (!err) {
                    resolve(result);
                } else {
                    reject(new Error(err));
                }
            });
        });
    });
}
