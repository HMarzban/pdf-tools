const multer = require('multer');
const fs = require('fs-extra');
const sanitizeFileName = require('../../utils/FileNameSanitize');

const storage = multer.diskStorage({
  async destination(req, file, cb) {
    const upload = `${req['SConfig'].upload}/${new Date().getFullYear()}/${new Date().getMonth()}`;
    if (!fs.existsSync(upload)) fs.mkdirsSync(upload);

    cb(null, upload);
  },
  filename(req, file, cb) {
    const fileName = `${new Date().getTime()}-${sanitizeFileName(file.originalname)}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage });

module.exports = {
  upload
};
