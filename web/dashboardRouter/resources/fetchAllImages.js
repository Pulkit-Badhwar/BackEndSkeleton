const Stream = require('stream')
const readable = new Stream.Readable();

const { fetchAllResources } = require('../../../service/resourceService');
const { getS3Data } = require('../../../utils/s3Utils');


async function fetchAllImages(req, res, next) {
    let imageResponse = {};
    const resultArr = await fetchAllResources();

    const abc = resultArr.map(async (data, index) =>{
        imageResponse[data.topic] = await getS3Data(data.s3key);
        return imageResponse
    })

    Promise.all(abc).then((data) => {
        res.json(imageResponse);
        res.end(null, 'binary');
    })
 


  
}

module.exports = fetchAllImages;