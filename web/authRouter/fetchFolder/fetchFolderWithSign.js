const { getS3FileStream } = rootRequire('utils/awsS3Utils');

async function fetchFolderWithSign(req, res) {
  try {
    function getRedisVal(key) {
      return new Promise((resolve, reject) => {
        redis.get(key, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
    }

    async function redisDel(token) {
      redis.del([token], (err, response) => {
        if (response) {
          logger.info('redisDel :: Deleted Successfully');
        } else {
          logger.error('redisDel :: Cannot be deleted');
        }
      });
    }
    const signature = req.query.signature;
    const s3key = await getRedisVal(signature);
    const s3Stream = await getS3FileStream(s3key.toString());
    res.setHeader('Content-Type', 'application/pdf');
    s3Stream.pipe(res);
    redisDel(signature);
  } catch (err) {
    throw err;
  }
}

module.exports = fetchFolderWithSign;