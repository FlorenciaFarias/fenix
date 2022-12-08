const { diskStorage } = require('multer');
const { resolve, extname } = require('path');

let destination = folder => (req, file, cb) => cb(null, resolve(__dirname, folder));
let filename = (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + extname(file.originalname));

const storage = uploads => diskStorage({
    destination: destination(uploads),
    filename: filename
});

module.exports = storage;