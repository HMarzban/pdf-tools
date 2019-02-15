const router = require('express').Router();
const { upload } = require('../_middleware');
const controller = require('./merge-controller');

// api/pdf/merge
router.post('/merge', upload.array('pdf', 10), controller);

module.exports = router;
