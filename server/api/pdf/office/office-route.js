const router = require('express').Router();
const { upload } = require('../_middleware');
const { WORD_controller, EXCEL_controller, PPT_controller } = require('./office-controller');

// api/pdf/to/word
// api/pdf/to/excel
// api/pdf/to/ppt
router.post('/to/word', upload.single('pdf'), WORD_controller);
router.post('/to/excel', upload.single('pdf'), EXCEL_controller);
router.post('/to/ppt', upload.single('pdf'), PPT_controller);

module.exports = router;
