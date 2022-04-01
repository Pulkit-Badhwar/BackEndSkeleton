const { saveUserImage } = require('../../../service/impactUserService');
const { uploadFile } = require('../../../utils/s3Utils');
const moment = require('moment');


async function uploadUserImage(req, res, next) {
    const currentDate = new Date(Date.now());
    const fileName = req.file.originalname

    const result = await uploadFile(req.file, fileName, req.headers.email );

    const user = {
        fileName : req.file.originalname,
        email : req.headers.email,
        publishedDate : moment(currentDate, 'YYYY-MM-DD HH:mm:ss').toISOString().slice(0, 19).replace('T', ' '),
        s3key: result.Key,
        etag: result.ETag,
        bucketName: result.Bucket,
    }
    const userDate = await saveUserImage(user);
    return userDate;
}

module.exports = uploadUserImage;