// Fields : email, token, time, expiry_time, status

function find() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_client_tracker ORDER BY email';
    mysqlCon.query(sql, (err, result) => {
      if (err) {
        logger.error(`clientTrackerRepo :: error :: find :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function save(client) {
  logger.info(` clientTrackerRepo :: Save :: ${JSON.stringify(client)}`);
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO app_client_tracker (email, token, time, expiry_time, status) VALUES ?';
    const values = [[client.email, client.token, client.time, client.expiry_time, client.status]];
    mysqlCon.query(sql, [values], (err, result) => {
      if (err) {
        logger.error(`clientTrackerRepo :: error :: save :: ${JSON.stringify(client)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByEmail(email) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_client_tracker WHERE email=?';
    mysqlCon.query(sql, [email], (err, result) => {
      if (err) {
        logger.error(`clientTrackerRepo :: error :: findByEmail :: ${email} :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByToken(token) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_client_tracker WHERE token=?';
    mysqlCon.query(sql, [token], (err, result) => {
      if (err) {
        logger.error(`clientTrackerRepo :: error :: findByToken :: ${token} :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function updateByToken(updateObject, token) {
  logger.info(`clientTrackerRepo :: Token : ${JSON.stringify(token)}`);
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE app_client_tracker SET ? where token = ?';
    mysqlCon.query(sql, [updateObject, token], (err, result) => {
      if (err) {
        logger.error(`clientTrackerRepo :: error :: update :: ${token} :: ${JSON.stringify(updateObject)}`);
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
  findByToken,
  updateByToken,
};