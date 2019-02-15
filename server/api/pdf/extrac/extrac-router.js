const router = require('express').Router();
const { upload } = require('../_middleware');
const controller = require('./extrac-controller');

// api/pdf/extract
router.post('/extrac', upload.single('pdf'), controller);

module.exports = router;
