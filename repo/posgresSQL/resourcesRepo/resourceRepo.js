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
    pool.query('INSERT INTO  public."Library" ("email", "author", "publishedDate","department", "subject", "topic", "description", "s3key", "content" ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [email, user.author, user.publishedDate, user.department, user.subject, user.topic, user.description, user.s3key, user.content], (err, result) => {
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
    const sql = `SELECT * FROM public."Library" WHERE "email" = '${email}'`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows);
    });
  });
}


function fetchByTopic(topic) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."Resource" WHERE "topic" = '${topic}'`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows);
    });
  });
}

function fetchAll(topic) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."Resource"`;
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
  fetchByEmail,
  fetchByTopic,
  fetchAll,
}