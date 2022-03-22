const fs = require('fs');
const AWS = require('aws-sdk');
const cred = require('./aws.json');
const s3 = new AWS.S3({
    accessKeyId: cred.accessKey,
    secretAccessKey: cred.secretAccessKey
});
console.log(cred, '...dirname', __dirname)
const fileName = __dirname+'/single1.png';

const uploadFile = () => {
  fs.readFile(fileName, (err, data) => {
     if (err) throw err;
     const params = {
         Bucket: 'mydocumentsimpactroom', // pass your bucket name
         Key: 'companyid/single1.png', // file will be saved as testBucket/contacts.csv
         Body: data
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) throw s3Err
         console.log(`File uploaded successfully at ${data.Location}`)
     });
  });
};


module.exports = {
    uploadFile
}
