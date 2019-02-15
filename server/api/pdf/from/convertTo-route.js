const router = require('express').Router();
const { upload } = require('../_middleware');
const {
  WORD_controller,
  EXCEL_controller,
  PPT_controller,
  JPG_controller
} = require('./convertTo-controller');

// api/pdf/from/word
// api/pdf/from/excel
// api/pdf/from/ppt
// api/pdf/from/jpeg

router.post('/from/word', upload.single('pdf'), WORD_controller);
router.post('/from/excel', upload.single('pdf'), EXCEL_controller);
router.post('/from/ppt', upload.single('pdf'), PPT_controller);
router.post('/from/jpg', upload.array('pdf', 10), JPG_controller);

module.exports = router;
