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
    pool.query('INSERT INTO  public."login_token_tracker" (email, token, time, "expiry_time", status) VALUES ($1, $2, $3, $4, $5)', [user.email, user.token, user.time, user.expiry_time, user.status], (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}


function updateByToken(updateObject, token) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE public."login_token_tracker" SET status = '${updateObject.status}' WHERE token = '${token}'`, (err, result) => {
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
  updateByToken,
};