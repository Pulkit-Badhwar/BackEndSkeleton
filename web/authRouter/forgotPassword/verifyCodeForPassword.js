const { fetchUserByCode } = require('../../../service/impactUserService');


async function verifyCodeForPassword(req,res){
    const  { uniqueString } = req.params;
    const user = await fetchUserByCode(uniqueString);
    if (user) {
        res.redirect('http://localhost:3100/NewPass')
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = verifyCodeForPassword;