const aws = require('aws-sdk');
const nconf = require('nconf');
const fs = require('fs');
const path = require('path');

nconf.env();

const BUCKET_NAME = nconf.get('BUCKET_NAME');
const IAM_USER_KEY = nconf.get('IAM_USER_KEY');
const IAM_USER_SECRET = nconf.get('IAM_USER_SECRET');

aws.config.update({
  region: nconf.get('AWS_REGION'),
});

const s3 = new aws.S3({
  apiVersion: nconf.get('AWS_API_VERSION'),
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
});

function uploadToS3(file) {
  return new Promise((resolve, reject) => {
    logger.info(`upload file : ${file.path}`);
    const fileStream = fs.createReadStream(file.path);
    fileStream.on('error', (err) => {
      logger.error(`file read error : ${err}`);
      reject(err);
    });
    const params = {
      Bucket: BUCKET_NAME,
      Key: path.basename(file.path),
      Body: fileStream,
    };

    s3.upload(params, (err, result) => {
      if (err) {
        logger.error(`error upload file to s3 : ${err}`);
        reject(err);
      }
      fs.unlink(file.path, (err) => {
        if (err) {
          reject(err);
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
      Bucket: BUCKET_NAME,
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

function deleteS3File(key) {
  logger.info(`delete File Called :: ${key}`);
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: BUCKET_NAME,
      Key: key,
    };
    s3.deleteObject(params, (err, data) => {
      if (err) {
        logger.error(`Error while deleting object : ${key}`);
        reject(err);
      }
      logger.info(`DELETE RESULT : ${JSON.stringify(data)}`);
      resolve(data);
    });
  });
}

module.exports = {
  getS3FileStream,
  uploadToS3,
  deleteS3File,
};
