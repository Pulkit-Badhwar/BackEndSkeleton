const multer = require('multer');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/Users/pulkitbadhwar/Desktop/work/MetaOrigin/ImpactRooms/impactBackend/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + '-' + Date.now())
    }
})

const upload = multer({ storage: storage })

module.exports = (router) => {
    router.post('/file/fileUpload', upload.single('file'), (req, res, next) => {
        const file = req.file
        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next(error)
        }
        res.send(file)

    })
}

