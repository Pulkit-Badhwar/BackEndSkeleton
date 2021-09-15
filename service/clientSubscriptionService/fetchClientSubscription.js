const { findByEmail } = rootRequire('repo/mysql/clientSubscriptionRepo');
const moment = require('moment');

async function fetchClientSubscription(email) {
  try {
    let active = [];
    let expired = [];

    const categoryObject = {'wheat':{}, 'maize':{}, 'pulses':{}};
    const categoryList = Object.keys(categoryObject);

    const data = await findByEmail(email);
    const subscribedCategories = data.map(d => d.category);

    const inactiveCategories = []
    for (let i=0;i< categoryList.length;i++){
        if (!subscribedCategories.includes(categoryList[i])){
            inactiveCategories.push(categoryList[i])
        }
    }

    for(let i = 0; i < data.length; i++) {
        if(data[i].expiresAt >= moment('2021-09-14')){
            active.push(data[i]);
        }
        else if (data[i].expiresAt < moment('2021-09-14')){
            expired.push(data[i]);    
        }
    }
    const result = {
        active : active,
        inactive : inactiveCategories,
        expired : expired,
    }
    return result;
  } catch (err) {
    throw err;
  }
}

module.exports = fetchClientSubscription;