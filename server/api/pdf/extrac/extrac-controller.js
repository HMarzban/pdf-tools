
const pdf = require('../../../service/pdf-tools');

module.exports = async (req, res) => {

  const converted = req['SConfig'].convertURL;

  const pdfInfo = await pdf.details(`${req.file.path}`);

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;
  const startPage = req.body.startPage;
  const lastPage = req.body.lastPage || pdfInfo['pageCount'];

  const RES_extrac = await pdf.extrac(inputFile, outputFile, startPage, lastPage);

  res.send({
    status: RES_extrac.is,
    message: RES_extrac.message,
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename}`
  });
}; // @Function: extract.controller()
