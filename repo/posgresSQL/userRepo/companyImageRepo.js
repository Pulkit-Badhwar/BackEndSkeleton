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
      pool.query('INSERT INTO  public."companyImage" ("email", "fileName", "publishedDate", "s3key", "etag", "bucketName") VALUES ($1, $2, $3, $4, $5, $6)', [user.email, user.fileName, user.publishedDate, user.s3key, user.etag, user.s3bucket], (err, result) => {
        if (err) {
          console.log('error');
          reject(err);
        }
        resolve(result);
      });
    });
  }

module.exports = {
    save,
}



