const path = require('path');

module.exports = {
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : 'docker',
        database : 'cartas',
        port: '5432'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
};