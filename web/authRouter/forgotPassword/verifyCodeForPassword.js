const { fetchUserByCode } = require('../../../service/impactUserService');
const nconf = require('nconf');

nconf.env();
const REACT_URL = nconf.get('REACT_URL');

async function verifyCodeForPassword(req,res){
    const  { uniqueString } = req.params;
    const user = await fetchUserByCode(uniqueString);
    if (user) {
        res.redirect(`${REACT_URL}/NewPass`)
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = verifyCodeForPassword;