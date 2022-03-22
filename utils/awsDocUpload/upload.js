const fs = require('fs');
const AWS = require('aws-sdk');
// const cred = require('./aws.json');
const path = require('path');

const s3 = new AWS.S3({
    accessKeyId: "AKIAW3747ON64LRSOQUR",
    secretAccessKey: "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"
});
// console.log(cred, '...dirname', __dirname)
// const fileName = __dirname+'/single1.png';

// const uploadFile = (file) => {
//     const fileName = file.path
//     fs.readFile(fileName, (err, data) => {
//         if (err) throw err;
//         const params = {
//             Bucket: 'mydocumentsimpactroom',
//             Key: `companyid/companyImage`,
//             Body: data
//         };
//         s3.upload(params, (err, result) => {
//             if (err) {
//               logger.error(`error upload file to s3 : ${err}`);
//               reject(err);
//             }
//             logger.info(`File uploaded successfully at ${data.Location}`)
//             fs.unlink(file.path, (error) => {
//               if (error) {
//                 throw error;
//               }
//               logger.info(`awsS3Utils :: local file deleted :: ${file.path}`);
//             });
//             return result;
//           });
//     });
// };


function uploadFile(file) {
    return new Promise((resolve, reject) => {
      logger.info(`upload file : ${file.path}`);
      const fileStream = fs.createReadStream(file.path);
      fileStream.on('error', (err) => {
        logger.error(`file read error : ${err}`);
        reject(err);
      });
      const params = {
        Bucket: 'mydocumentsimpactroom',
        Key: `companyid/companyImage`,
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


module.exports = {
    uploadFile
}
