const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
})


function save(user) {
    return new Promise((resolve, reject) => {
      pool.query('INSERT INTO  public."Company" (firstName, lastName, email, companyName, password, isvalid, code) VALUES ($1, $2, $3, $4, $5, $6, $7)', [user.firstName, user.lastName, user.email, user.companyName, user.password, user.isValid, user.uniqueString], (err, result) => {
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



