const saveCompanyImage = require('../../../service/impactUserService/saveCompanyImage');
const { uploadFile } = require('../../../utils/s3Utils');
const moment = require('moment');


async function uploadCompanyImage(req, res, next) {
    const currentDate = new Date(Date.now());

    const result = await uploadFile(req.file);

    const user = {
        fileName : req.file.originalname,
        email : req.headers.email,
        publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
        s3key: result.Key,
        etag: result.ETag,
        bucketName: result.Bucket,
    }
    const userDate = await saveCompanyImage(user);
    return userDate;
}

module.exports = uploadCompanyImage;