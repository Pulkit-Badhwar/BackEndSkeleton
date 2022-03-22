const fs = require('fs');
const AWS = require('aws-sdk');
const nconf = require('nconf');

nconf.env();
const accessKey = nconf.get('ACCESS_KEY');
const secretAccessKey = nconf.get('SECRET_ACCESS_KEY');
const bucketName = nconf.get('BUCKET_NAME');

const s3 = new AWS.S3({
  accessKeyId: accessKey,
  secretAccessKey: secretAccessKey
});


function uploadFile(file, fileName) {
  return new Promise((resolve, reject) => {
    logger.info(`upload file : ${file.path}`);
    const fileStream = fs.createReadStream(file.path);
    fileStream.on('error', (err) => {
      logger.error(`file read error : ${err}`);
      reject(err);
    });
    const params = {
      Bucket: bucketName,
      Key: `companyid/${fileName}`,
      Body: fileStream,
    };

    s3.upload(params, (err, result) => {
      if (err) {
        logger.error(`error upload file to s3 : ${err}`);
        reject(err);
      }
      fs.unlink(file.path, (error) => {
        if (error) {
          reject(error);
        }
        logger.info(`awsS3Utils :: local file deleted :: ${file.path}`);
      });
      resolve(result);
    });
  });
}

function getS3FileStream(key) {
  logger.info(`awsS3Utils :: get file : ${key}`);
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: bucketName,
      Key: key,
    };
    const fileStream = s3.getObject(params).createReadStream();
    fileStream.on('error', (error) => {
      logger.error(`Error found while reading aws s3 file :: ${key} :: ${error}`);
      reject(error);
    });
    resolve(fileStream);
  });
}


module.exports = {
  uploadFile,
  getS3FileStream,
}
