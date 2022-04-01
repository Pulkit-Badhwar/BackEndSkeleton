const Pool = require('pg').Pool
const pool = new Pool({
  user: 'impactroomdbadmin',
  host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
  database: 'impactrooms_admin',
  password: '7tkLtQvYLA5+-sum',
  port: 5432,
})



function fetchAll() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM investor."Investor"`;
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
    pool.query(`UPDATE investor."Investor" SET "Stage" = '${user.Stage}' WHERE "Investor_name" = '${user.InvestorName}'`, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}

function save(user) {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO  investor."Company" ("CompanyID", "Stage", "Investor_ID") VALUES ($1, $2, $3)', [user.CompanyID, user.Stage, user.Investor_ID], (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByID(user) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM investor."Company" WHERE ("Investor_ID" = '${user.Investor_ID}' AND "CompanyID" = '${user.CompanyID}')`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result?.rows);
    });
  });
}


function update(user) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE investor."Company" SET "Stage" = '${user.Stage}' WHERE ("CompanyID" = '${user.CompanyID}' AND "Investor_ID" = '${user.Investor_ID}')`, (err, result) => {
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
  save,
  findByID,
  update,
}