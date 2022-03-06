const Pool = require('pg').Pool
const pool = new Pool({
  user: 'impactroomdbadmin',
  host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
  database: 'impactrooms_admin',
  password: '7tkLtQvYLA5+-sum',
  port: 5432,
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function save(user, email) {
  return new Promise((resolve, reject) => {
    const FundingID = getRandomInt(100);
    pool.query('INSERT INTO  public."Funding" ("FundingID", "FundingRound", "FundingAmount", email ) VALUES ($1, $2, $3, $4)', [FundingID, user.FundingRound, user.FundingAmount, email], (err, result) => {
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
    const sql = `SELECT * FROM public."Funding" WHERE "email" = '${email}'`;
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