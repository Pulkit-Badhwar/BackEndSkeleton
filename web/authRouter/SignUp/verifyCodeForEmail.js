const { fetchUserByCode } = require('../../../service/impactUserService');
const { updateUserByCode } = require('../../../service/impactUserService');


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
        res.redirect('https://dev.impactroomsdev.com/Verified');
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = verifyCodeForEmail;