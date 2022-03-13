const { fetchUserByCode } = require('../../../service/impactUserService');


async function newUsername(req,res){
    const  { uniqueString } = req.params;
    const user = await fetchUserByCode(uniqueString);
    if (user) {
        res.redirect(`https://dev.impactroomsdev.com/NewUsername?uniqueString=${uniqueString}`)
    }
    else{
        console.log('error in finding user');
    }
}

module.exports = newUsername;