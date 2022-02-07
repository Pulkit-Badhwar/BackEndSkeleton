const Pool = require('pg').Pool
const pool = new Pool({
    user: 'impactroomdbadmin',
    host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
    database: 'impactrooms_admin',
    password: '7tkLtQvYLA5+-sum',
    port: 5432,
})


function save(user) {
  console.log(user);
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO  public."Company" ("CompanyID", "Company_Name", "Country", "Website", "Registration_no", "LinkedinURL", "Year_Founded", "Legal_Entity", "Other", " Continent_ops", "Expansion12Months", "Description" ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [user.CompanyID, user.Company_Name, user.Country, user.Website, user.Registration_no, user.LinkedinURL, user.Year_Founded, user.Legal_Entity, user.Other, user.Continent_ops, user.Expansion12Months, user.Description ], (err, result) => {
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



