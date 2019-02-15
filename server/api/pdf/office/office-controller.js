const offic = require('../../../service/pdf-office');

const WORD_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = converted;

  await offic.toWORD(inputFile, outputFile);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.doc`
  });
}; // @Function: WORD_controller()

const EXCEL_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;

  await offic.toEXCEL(inputFile, outputFile);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.xlsx`
  });
}; // @Function: EXCEL_controller()

const PPT_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}.pptx`;
  await offic.toPPT(inputFile, outputFile);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.pptx`
  });
}; // @Function: PPT_controller()

module.exports = {
  WORD_controller,
  EXCEL_controller,
  PPT_controller
};
