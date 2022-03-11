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
        res.redirect('http://dev-impact-rooms-web-elb-euw2-1787307.eu-west-2.elb.amazonaws.com/Verified');
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = verifyCodeForEmail;