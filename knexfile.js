const path = require('path');

module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'docker',
        database: 'cartas',
        port: '5432',
        ssl: { rejectUnauthorized: false }
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        //directory: path.resolve(__dirname, 'dist', 'database', 'migrations')
    },
    useNullAsDefault: true,
};