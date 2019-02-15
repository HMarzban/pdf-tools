const pdf = require('../../../service/pdf-tools');

module.exports = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const RES_compress = await pdf.compress(req.file.path, `${converted}/${req.file.filename}`);

  res.send({
    status: RES_compress.is,
    message: RES_compress.message,
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename}`
  });
}; // @Function: compress.controller();
