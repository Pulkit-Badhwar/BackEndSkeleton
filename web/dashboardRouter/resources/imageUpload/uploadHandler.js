const Boom = require('boom');
const moment = require('moment');
const { createResource } = require('../../../../service/resourceService')


async function handler(req, file) {
  console.log(file);
  try {
    const email = req.headers.email;
    const user = {
      fileName : req.body.fileName || null,
      author : req.body.author, 
      publishedDate : req.body.publishedDate || null,
      subject : req.body.subject || null,
      topic : req.body.topic || null,
      desc : req.body.desc || null,
    }
    const userData = await createResource(user, email);
    return userData;
  } catch (err) {
    throw err;
  }
}



function uploadHandler(req, res, next) {
  handler(req).then((data) => {
    res.json({
      success: true,
      data,
    });
  }).catch(err => next(err));
}

module.exports = uploadHandler;
