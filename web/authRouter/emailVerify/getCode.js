const { fetchUserByCode } = require('../../../service/impactUserService');
const { updateUserByCode } = require('../../../service/impactUserService');


async function getCode(req,res){
    const  { uniqueString } = req.params;
    console.log(uniqueString);
    const user = await fetchUserByCode(uniqueString);
    const data = {
        isValid : 'true',
        uniqueString : uniqueString,
    }
    if (user) {
        updateUserByCode(data);
        res.redirect('http://localhost:3100/Verified');
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = getCode;