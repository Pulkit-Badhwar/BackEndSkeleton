function find(offset,pageSize) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_client_user ORDER BY client_id limit ?,?';
    mysqlCon.query(sql, [offset,pageSize], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: find :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findEmail() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT email FROM app_client_user ORDER BY name';
    mysqlCon.query(sql, (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: find :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function count() {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT COUNT(*) FROM app_client_user';
    mysqlCon.query(sql, (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: count :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByEmail(email) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_client_user WHERE email=?';
    mysqlCon.query(sql, [email], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: findByEmail :: ${email} :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function findByNumber(number) {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM app_client_user where number=?';
    mysqlCon.query(sql, [number], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: findByNumber :: ${number} :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function save(client) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO app_client_user (name, email, number, password) VALUES ?';
    const values = [[client.name, client.email, client.number, client.password]];
    mysqlCon.query(sql, [values], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: save :: ${JSON.stringify(client)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function updateByEmail(updateObject, email) {
  logger.info(`clientUserRepo :: UpdateObject : ${JSON.stringify(updateObject)}`);
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE app_client_user SET ? where email = ?';
    mysqlCon.query(sql, [updateObject, email], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: update :: ${email} :: ${JSON.stringify(updateObject)}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function updatePasswordByEmail(password, email) {
  return new Promise((resolve, reject) => {
    const sql = 'UPDATE app_client_user SET password = ? where email = ?';
    mysqlCon.query(sql, [password, email], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: update :: email :: ${email}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

function removeByEmail(email) {
  return new Promise((resolve, reject) => {
    const sql = 'DELETE FROM app_client_user where email = ?';
    mysqlCon.query(sql, [email], (err, result) => {
      if (err) {
        logger.error(`clientUserRepo :: error :: removeByEmail :: ${email} :: ${err}`);
        reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = {
  find,
  findEmail,
  count,
  findByEmail,
  findByNumber,
  save,
  updateByEmail,
  updatePasswordByEmail,
  removeByEmail,
};