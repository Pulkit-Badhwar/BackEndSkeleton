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
      pool.query('INSERT INTO  public."ImpactRooms" (firstName, lastName, email, companyName, password, isvalid, code) VALUES ($1, $2, $3, $4, $5, $6, $7)', [user.firstName, user.lastName, user.email, user.companyName, user.password, user.isValid, user.uniqueString], (err, result) => {
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

function findByCode(code) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."ImpactRooms" WHERE code = '${code}'`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows[0]);
    });
  });
}

function updateCode(user) {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE public."ImpactRooms" SET isvalid = '${user.isValid}' WHERE code = '${user.uniqueString}'`, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}


function updateEmail(user) {
  const password = JSON.stringify(user.password);
  return new Promise((resolve, reject) => {
    // SET json_field = json_field || new_json_data;
    pool.query(`UPDATE public."ImpactRooms" SET password = password || '${password}' WHERE email = '${user.email}'`, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result);
    });
  });
}




module.exports = {
    find,
    save,
    findByEmail,
    findByCode,
    updateCode,
    updateEmail,
}



