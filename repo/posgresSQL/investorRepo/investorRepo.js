const Pool = require('pg').Pool
const pool = new Pool({
  user: 'impactroomdbadmin',
  host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
  database: 'InvestorDatabase',
  password: '7tkLtQvYLA5+-sum',
  port: 5432,
})



function fetchAll() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."Investor"`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows);
    });
  });
}

function updateByID(user) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE public."Investor" SET "Stage" = '${user.Stage}' WHERE "Investor_name" = '${user.InvestorName}'`, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}




module.exports = {
  fetchAll,
  updateByID,
}