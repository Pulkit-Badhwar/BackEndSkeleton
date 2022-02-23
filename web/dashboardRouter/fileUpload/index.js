
const multer  = require('multer')
const upload = multer({ dest: '/Users/pulkitbadhwar/Desktop/work/MetaOrigin/ImpactRooms/impactBackend/uploads' })


module.exports = (router) => {
    router.post('/file/fileUpload',upload.single('file'), function (req, res) {
        console.log(req.body) // form fields
        console.log(req.file) // form files
    });
};