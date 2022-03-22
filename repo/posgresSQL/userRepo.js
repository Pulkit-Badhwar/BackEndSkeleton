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
      pool.query('INSERT INTO  public."ImpactRooms" (firstName, lastName, email, password, isvalid, code, mobile, "CompanyURL", "CompanyID", "CompanyURLAuth", "Primary", "CompanyName") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)', [user.firstName, user.lastName, user.email, user.password, user.isValid, user.uniqueString, user.mobile, user.CompanyURL, user.CompanyID, user.CompanyURLAuth, user.Primary, user.CompanyName], (err, result) => {
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

function findByUrl(code) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM public."ImpactRooms" WHERE "CompanyURL"= '${code}'`;
    pool.query(sql, (err, result) => {
      if (err) {
        console.log('error');
        reject(err);
      }
      resolve(result.rows[0]);
    });
  });
}

function updateByCode(user) {
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


function updateByEmail(user) {
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
    updateByCode,
    updateByEmail,
    findByUrl,
}



