const Pool = require('pg').Pool
const pool = new Pool({
  user: 'impactroomdbadmin',
  host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
  database: 'partnerDatabase',
  password: '7tkLtQvYLA5+-sum',
  port: 5432,
})



function fetchByToken(token) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."Token" WHERE "TokenName" = '${token}'`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows);
    });
  });
}


module.exports = {
    fetchByToken
}