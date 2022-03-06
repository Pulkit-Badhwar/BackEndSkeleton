const Pool = require('pg').Pool
const pool = new Pool({
    user: 'impactroomdbadmin',
    host: 'dev-impact-rooms-webdb-euw2.cfep3ccwhxle.eu-west-2.rds.amazonaws.com',
    database: 'impactrooms_admin',
    password: '7tkLtQvYLA5+-sum',
    port: 5432,
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function save(user, email) {
    return new Promise((resolve, reject) => {
        const sdg = '123';
        const vision = 'vision';
        const buisnessID = getRandomInt(100);

        pool.query('INSERT INTO  public."Buisness" ("BuisnessID", "SDG_ID", "SDG_Imp", "Impact_Vision", "Impact_Desc", "Strategy", "Help_Build_one", "Women_leader", "CEO_Women", "CEO_African", "Num_African_Leaders", "License_Regulation", "Other", "Buisness_model", "Revenue_model", email ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)', [buisnessID, sdg, user.SDG_Imp.label, vision, user.ImpactVision_Desc, user.Strategy, user.Help_Build_one, user.NoOfWomen.label, user.CEO_Women.label, user.CEO_Africa, user.NoOfAfrica.label, user.License_Regulation.label, user.License_Desc, user.Buisness_model.labels, user.RevenueModel, email], (err, result) => {
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
      const sql = `SELECT * FROM public."Buisness" WHERE "email" = '${email}'`;
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