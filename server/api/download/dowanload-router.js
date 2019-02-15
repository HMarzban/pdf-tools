const router = require('express').Router();

router.get('/*', (req, res) => {
  const fileLocation = req.originalUrl.replace('/downloads/', '');
  res.download(fileLocation, fileLocation);
});

module.exports = router;
