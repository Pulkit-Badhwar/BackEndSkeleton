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
    pool.query('INSERT INTO  public."popUp" (email, "Year_Founded", "Country_Headquarters", "Sector", "Product_Type", "Funding_Stage") VALUES ($1, $2, $3, $4, $5, $6)', [email, user.Year_Founded, user.Country_Headquarters, user.Sector, user.Product_Type, user.Funding_Stage], (err, result) => {
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
    const sql = `SELECT * FROM public."popUp" WHERE "email" = '${email}'`;
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