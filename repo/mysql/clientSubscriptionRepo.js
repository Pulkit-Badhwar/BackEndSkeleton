function find() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM app_client_subscription ORDER BY id';
      mysqlCon.query(sql, (err, result) => {
        if (err) {
          logger.error(`subscriptionRepo :: error :: find :: ${err}`);
          reject(err);
        }
        resolve(result);
      });
    });
  }

  function findByEmail(email) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM app_client_subscription WHERE client_email=?';
      mysqlCon.query(sql, [email], (err, result) => {
        if (err) {
          logger.error(`clientUserRepo :: error :: findByEmail :: ${email} :: ${err}`);
          reject(err);
        }
        resolve(result);
      });
    });
  }




  module.exports = {
  find,
  findByEmail
  }