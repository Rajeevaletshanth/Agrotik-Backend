require('dotenv').config();

module.exports = {
    'port': process.env.PORT,
    'inProduction': process.env.PRODUCTION,
    //pgsql
    'pghost':process.env.PG_HOST,
    'pgport':process.env.PG_PORT,
    'pguser':process.env.PG_USER,
    'pgpassword':process.env.PG_PASSWORD,
    'pgdatabase':process.env.PG_DATABASE
};