const { fetchUserByCode } = require('../../../service/impactUserService');


async function verifyCodeForPassword(req,res){
    const  { uniqueString } = req.params;
    const user = await fetchUserByCode(uniqueString);
    if (user) {
        res.redirect('http://dev-impact-rooms-web-elb-euw2-1787307.eu-west-2.elb.amazonaws.com/NewPass')
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = verifyCodeForPassword;