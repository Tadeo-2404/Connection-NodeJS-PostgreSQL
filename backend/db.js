import pkg from 'pg'
const { Client } = pkg;

const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'root',
    database: 'Libreria'
});

export default client;