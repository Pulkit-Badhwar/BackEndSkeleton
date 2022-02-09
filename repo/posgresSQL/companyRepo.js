const Pool = require('pg').Pool
const pool = new Pool({
    user: 'impactroomdbadmin',
    host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
    database: 'impactrooms_admin',
    password: '7tkLtQvYLA5+-sum',
    port: 5432,
})


function save(user,email) {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO  public."Company" ("firstName", "lastName", "CompanyID", "Company_Name", "Country", "Website", "Registration_no", "LinkedinURL", "Year_Founded", "Legal_Entity", "Other", "Continent_ops", "Expansion12Months", "Description", "email" ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [user.firstName, user.lastName ,user.CompanyID, user.Company_Name, user.Country, user.Website, user.Registration_no, user.LinkedinURL, user.Year_Founded, user.Legal_Entity, user.Other, user.Continent_ops, user.Expansion12Months, user.Description, email ], (err, result) => {
        if (err) {
          console.log('error');
          reject(err);
        }
        resolve(result);
      });
    });
  }


  // function updateByEmail(user, email) {
  //   return new Promise((resolve, reject) => {
  //     pool.query(`UPDATE public."Company" "firstName" = '${user.firstName}', "lasttName" = '${user.lastName}', "CompanyID" = '${user.CompanyID}', "Company_Name" = '${user.Company_Name}', "Country" = '${user.Country}', "Website" = '${user.Website}', "Registration_no" = '${user.Registration_no}', "LinkedinURL" = '${user.LinkedinURL}', "Year_Founded" = '${user.Year_Founded}', "Legal_Entity" = '${user.Legal_Entity}', "Other" = '${user.Other}', "Continent_ops" = '${user.Continent_ops}', "Expansion12Months" = '${user.Expansion12Months}', "Description" = '${user.Description}' WHERE email = '${email}'`, (err, result) => {
  //       if (err) {
  //         console.log('error');
  //         reject(err);
  //       }
  //       resolve(result);
  //     });
  //   });
  // }


  function updateByEmail(user) {
    return new Promise((resolve, reject) => {
      pool.query(`UPDATE public."Company" SET "Description" = '${user.Description}' WHERE email = '${user.email}'`, (err, result) => {
        if (err) {
          console.log('error');
          reject(err);
        }
        resolve(result);
      });
    });
  }

  function fetchByCompanyID(CompanyID) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM public."Company" WHERE "CompanyID" = '${CompanyID}'`;
      pool.query(sql, (err, result) => {
        if (err) {
          console.log('error');
          reject(err);
        }
        resolve(result.rows[0]);
      });
    });
  }


  function fetchByEmail(email) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM public."Company" WHERE "email" = '${email}'`;
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
    fetchByCompanyID,
    updateByEmail,
    fetchByEmail,
}



