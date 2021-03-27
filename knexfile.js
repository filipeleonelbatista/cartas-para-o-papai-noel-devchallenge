const path = require('path');

module.exports = {
    client: 'pg',
    connection: {
        host: 'ec2-18-211-97-89.compute-1.amazonaws.com',
        user: 'lcspdyciahadqo',
        password: 'b7503eefdf0843adff395dd28e8065fcc2a43393a1cb3091a1029ec2f7dd0ac4',
        database: 'dvdinslidqtvq',
        port: '5432',
        ssl: { rejectUnauthorized: false }
    },
    migrations: {
        //directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        directory: path.resolve(__dirname, 'dist', 'database', 'migrations')
    },
    useNullAsDefault: true,
};