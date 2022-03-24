const { fetchUserByCode } = require('../../../service/impactUserService');
const { updateUserByCode } = require('../../../service/impactUserService');
const nconf = require('nconf');

nconf.env();
const REACT_URL = nconf.get('REACT_URL');


async function verifyCodeForEmail(req,res){
    const  { uniqueString } = req.params;
    console.log(uniqueString);
    const user = await fetchUserByCode(uniqueString);
    const data = {
        isValid : 'true',
        uniqueString : uniqueString,
    }
    if (user) {
        updateUserByCode(data);
        res.redirect(`${REACT_URL}/Verified`);
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = verifyCodeForEmail;