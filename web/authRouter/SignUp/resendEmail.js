const nodemailer = require('nodemailer');
const { fetchUserByEmail } = require('../../../service/impactUserService');

const sendEmail = (email, uniqueString) => {
    const Transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "pulkitgr892@gmail.com",
            pass: "Istari2975"
        }
    });

    
  var mailOptions;
  let sender = "Pulkit";
  mailOptions = {
    from: sender,
    to: email,
    subject: "test email",
    html: `Press <a href=http://backend-alb-996875402.eu-west-2.elb.amazonaws.com/auth/impact/verifyCodeForEmail/${uniqueString}> here </a> to verify`
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
    const data = await fetchUserByEmail(req.body.email);
    const uniqueString = data.code;
    sendEmail(req.body.email, uniqueString);
}

function resendEmail(req, res, next) {
    handler(req).then((data) => {
        res.json({
            success: true,
            data,
        });
    }).catch((err) => next(err));
}

module.exports = resendEmail;