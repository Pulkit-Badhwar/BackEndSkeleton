const multer = require('multer');
const uploadCompanyImage = require('./uploadCompanyImage');
const fetchCompanyImage = require('./fetchCompanyImage');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/pulkitbadhwar/Desktop/work/MetaOrigin/ImpactRooms/impactBackend/uploads/companyImage')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = (router) => {
    router.post('/user/companyImage', upload.single('image'), (req, res, next) => {
        uploadCompanyImage(req);
        res.send(JSON.stringify('file uploaded'));
    })

    router.get('/user/fetchCompanyImage', fetchCompanyImage);
}