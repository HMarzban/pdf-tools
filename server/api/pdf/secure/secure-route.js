const router = require('express').Router();
const { upload } = require('../_middleware');
const { DECRYPTcontroller, ENCRYPTcontroller } = require('./secure-controller');

// api/pdf/decrypt
// api/pdf/encrypt
router.post('/decrypt', upload.single('pdf'), DECRYPTcontroller);
router.post('/encrypt', upload.single('pdf'), ENCRYPTcontroller);

module.exports = router;
