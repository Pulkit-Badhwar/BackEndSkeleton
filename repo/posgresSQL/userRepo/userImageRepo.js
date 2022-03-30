const Pool = require('pg').Pool
const pool = new Pool({
  user: 'impactroomdbadmin',
  host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
  database: 'impactrooms_admin',
  password: '7tkLtQvYLA5+-sum',
  port: 5432,
})


function save(user) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO  public."userImage" ("email", "fileName", "publishedDate", "s3key", "etag", "bucketName") VALUES ($1, $2, $3, $4, $5, $6)', [user.email, user.fileName, user.publishedDate, user.s3key, user.etag, user.bucketName], (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByEmail(email) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."userImage" WHERE email = '${email}'`;
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
  save,
  findByEmail,
}



