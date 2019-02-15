const { EXCEL_to_PDF, JPG_to_PDF, PPT_to_PDF, WORD_to_PDF } = require('../../../service/from-pdf');

const WORD_controller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;

  await WORD_to_PDF(inputFile, outputFile);

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

  await EXCEL_to_PDF(inputFile, outputFile);

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

  await PPT_to_PDF(inputFile, outputFile);

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

  console.log(inputFile);

  try {
    await JPG_to_PDF(inputFile, outputFile);
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
