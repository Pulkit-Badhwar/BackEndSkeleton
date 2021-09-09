/* eslint-disable no-console */
const mysql = require('mysql2');
const nconf = require('nconf');

nconf.env();

const connObject = {
  host: nconf.get('MYSQL_HOST'),
  port: nconf.get('MYSQL_PORT'),
  user: nconf.get('MYSQL_USER'),
  password: nconf.get('MYSQL_PASS'),
  database: nconf.get('MYSQL_DB'),
};

console.log(connObject);

const mysqlCon = mysql.createConnection(connObject);

mysqlCon.connect((err) => {
  if (err) {
    logger.error('error connecting to mysql db');
    throw err;
  }
  logger.info('mysql successfully connected');
});

module.exports = mysqlCon;
