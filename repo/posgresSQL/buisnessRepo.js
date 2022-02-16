function save(user, CompanyID) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO  public."Buisness" ("BuisnessID", "SDG_ID", "SDG_Imp", "Impact_Vision", "Impact_Desc", "Strategy", "Help_Build_one", "Women_leader", "CEO_Women", "CEO_Africa", "Num_African_Leaders", "License_Regulation", "Other", "Buisness_model", "Revenue_model", "Buisness_vision" ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)', [user.firstName, user.lastName, user.CompanyID, user.Company_Name, user.Country, user.Website, user.Registration_no, user.LinkedinURL, user.Year_Founded, user.Legal_Entity, user.Other, user.Continent_ops, user.Expansion12Months.label, user.Description, email, user.WebsiteURL], (err, result) => {
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