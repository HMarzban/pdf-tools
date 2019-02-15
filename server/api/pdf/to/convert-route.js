const router = require('express').Router();
const { upload } = require('../_middleware');

const {
  PNG_controller,
  JPG_controller,
  BMP_controller,
  PSD_controller,
  EPS_controller,
  TXT_controller
} = require('./convert-controller');

// api/pdf/to/png
// api/pdf/to/jpg
// api/pdf/to/bmp
// api/pdf/to/psd
// api/pdf/to/eps
// api/pdf/to/txt

router.post('/to/png', upload.single('pdf'), PNG_controller);
router.post('/to/jpg', upload.single('pdf'), JPG_controller);
router.post('/to/bmp', upload.single('pdf'), BMP_controller);
router.post('/to/psd', upload.single('pdf'), PSD_controller);
router.post('/to/eps', upload.single('pdf'), EPS_controller);
router.post('/to/txt', upload.single('pdf'), TXT_controller);

module.exports = router;
