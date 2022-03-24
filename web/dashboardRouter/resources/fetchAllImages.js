const Stream = require('stream')
const readable = new Stream.Readable();

const { fetchAllResources } = require('../../../service/resourceService');
const { getS3FileStream } = require('../../../utils/s3Utils');


async function fetchAllImages(req, res, next) {
    try {
        let arr = [];
        const resultArr = await fetchAllResources();

        if (resultArr.length === 0) throw Boom.badRequest('Link is Invalid');
        resultArr.map(async (data, index) => {
            const s3Stream = await getS3FileStream(data.s3key);
            res.setHeader('Content-Type', 'image/png');
            s3Stream.pipe(res);
        })
    } catch (err) {
        logger.error(`serveFileS3 :: error ::  ${err}`);
        next(err);
    }
}

module.exports = fetchAllImages;