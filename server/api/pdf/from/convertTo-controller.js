const pdf = require('../../../service/pdf-tools');

const WORD_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;

  await pdf.FromWORD(inputFile, outputFile);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.pdf`
  });
}; // Function: WORD_controller()

const EXCEL_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;

  await pdf.FromEXCEL(inputFile, outputFile);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.pdf`
  });
}; // Function: WORD_controller()

const PPT_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;

  await pdf.FromPPT(inputFile, outputFile);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.pdf`
  });
}; // Function: WORD_controller()

const JPG_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  let inputFile = '';
  const outputFile = `${converted}/mergeFilesss_${new Date().getTime()}.pdf`;

  for (let file of req.files) {
    inputFile += ` ${file.path} `;
  }

  try {
    await pdf.FromJPG(inputFile, outputFile);
  } catch (error) {
    console.log(error);
  }

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${outputFile}`
  });
}; // Function: WORD_controller()

module.exports = {
  WORD_controller,
  EXCEL_controller,
  PPT_controller,
  JPG_controller
};
