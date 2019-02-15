const router = require('express').Router();
const { upload } = require('../_middleware');
const controller = require('./compress-controller');

// api/pdf/compress
router.post('/compress', upload.single('pdf'), controller);

module.exports = router;
