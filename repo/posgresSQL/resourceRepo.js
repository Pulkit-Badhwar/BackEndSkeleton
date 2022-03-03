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
    pool.query('INSERT INTO  public."Resources" ("email", "fileName", "author", "publishedDate", "subject", "topic", "desc" ) VALUES ($1, $2, $3, $4, $5, $6, $7)', [email, user.fileName, user.author, user.publishedDate, user.subject, user.topic, user.desc], (err, result) => {
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
    const sql = `SELECT * FROM public."Resources" WHERE "email" = '${email}'`;
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