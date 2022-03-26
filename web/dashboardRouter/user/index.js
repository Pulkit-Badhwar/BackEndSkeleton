const multer = require('multer');
const uploadCompanyImage = require('./uploadCompanyImage');
const fetchCompanyImageHandler = require('./fetchCompanyImageHandler');
const uploadCompanyLogo = require('./uploadCompanyLogo');
const fetchCompanyLogoHandler = require('./fetchCompanyLogoHandler');
const nconf = require('nconf');

nconf.env();
const folderLoc = nconf.get('folderLoc');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, folderLoc)
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

    router.get('/user/fetchCompanyImage', fetchCompanyImageHandler);

    router.post('/user/companyLogo', upload.single('logo'), (req, res, next) => {
        uploadCompanyLogo(req);
        res.send(JSON.stringify('file uploaded'));
    });

    router.get('/user/fetchCompanyLogo', fetchCompanyLogoHandler);
}