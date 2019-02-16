const pdf = require('../../../service/pdf-tools');

const WORD_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = converted;

  await pdf.ToWORD(inputFile, outputFile);

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

  await pdf.toEXCEL(inputFile, outputFile);

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
  await pdf.ToPPT(inputFile, outputFile);

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
