const saveCompanyImage = require('../../../service/impactUserService/saveCompanyImage');
const { uploadFile } = require('../../../utils/awsDocUpload/upload');
const moment = require('moment');
const Boom = require('boom');

async function uploadCompanyImage(req, res, next) {
    const currentDate = new Date(Date.now());

    const user = {
        fileName : req.file.originalname,
        email : req.headers.email,
        publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
        // s3key: s3Response[0].s3key,
        // etag: s3Response[0].eTag,
        // bucketName: s3Response[0].bucket,
    }
    const result = await saveCompanyImage(user);
    return result;
}

module.exports = uploadCompanyImage;