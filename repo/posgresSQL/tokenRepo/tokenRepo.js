const Pool = require('pg').Pool
const pool = new Pool({
  user: 'impactroomdbadmin',
  host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
  database: 'impactrooms_admin',
  password: '7tkLtQvYLA5+-sum',
  port: 5432,
})


function save(user, email) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO  public."token" ("tokenName", "publishedDate" , "email") VALUES ($1, $2, $3)', [user.tokenName, user.publishedDate, email], (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}



function fetchByEmail(email) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."token" WHERE "email" = '${email}'`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows[0]);
    });
  });
}




module.exports = {
  save,
  fetchByEmail,
}