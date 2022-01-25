const { fetchUserByCode } = require('../../../service/impactUserService');
const { updateByCode } = require('../../../service/impactUserService');


async function getCode(req,res){
    const  { uniqueString } = req.params;
    const user = await fetchUserByCode(uniqueString);
    const data = {
        isValid : 'true',
        uniqueString : uniqueString,
    }
    if (user) {
        updateByCode(data);
        res.redirect('http://localhost:3100/Verified')
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = getCode;