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
      pool.query('INSERT INTO  public."ImpactRooms" (name, email, number, password) VALUES ($1, $2, $3, $4)', [user.name, user.email, user.number, user.password], (err, result) => {
        if (err) {
          console.log('error');
          reject(err);
        }
        resolve(result);
      });
    });
  }


function find() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM public."ImpactRooms"';
      pool.query(sql, (err, result) => {
        if (err) {
          console.log('error');
          reject(err);
        }
        resolve(result.rows);
      });
    });
  }


function findByEmail(email) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."ImpactRooms" WHERE email = '${email}'`;
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
    find,
    save,
    findByEmail,
}



