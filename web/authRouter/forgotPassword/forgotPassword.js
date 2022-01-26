const { fetchUserByEmail } = require('../../../service/impactUserService');
const nodemailer = require('nodemailer');

const sendEmail = (email, uniqueString) => {
    const Transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "pulkitgr892@gmail.com",
            pass: "Silmarils2975"
        }
    });

    var mailOptions;
    let sender = "Pulkit";
    mailOptions = {
        from: sender,
        to: email,
        subject: "test email",
        html: `Press <a href=http://localhost:8200/auth/forgot/${uniqueString}> here </a> to change Password`
    };


    Transport.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Message sent');
        }
    })

}

async function handler(req) {
    if (req.body.email) {
        const email = req.body.email
        const data = await fetchUserByEmail(email);
        console.log(data.code);
        sendEmail(email, data.code);
    }
}

function forgotPassword(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = forgotPassword;