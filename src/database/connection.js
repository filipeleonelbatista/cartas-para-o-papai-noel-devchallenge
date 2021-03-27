const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'docker',
        database: 'cartas',
        port: '5432',
        ssl: { rejectUnauthorized: false }
    },
    useNullAsDefault: true,
});

module.exports = db;