const path = require('path');

module.exports = {
    client: 'pg',
    connection: {
        host: 'ec2-54-159-126-187.compute-1.amazonaws.com',
        user: 'fsgofyvaodjuxs',
        password: 'adb7e21ee1054e8e8a80032d371afdf93829420a19b953074fb5dad2a63af319',
        database: 'd5p68uf8kkq7pf',
        port: '5432',
        ssl: { rejectUnauthorized: false }
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        //directory: path.resolve(__dirname, 'dist', 'database', 'migrations')
    },
    useNullAsDefault: true,
};