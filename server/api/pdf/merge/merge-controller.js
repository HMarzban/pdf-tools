const pdf = require('../../../service/pdf-tools');

module.exports = async (req, res) => {

  const converted = req['SConfig'].convertURL;

  let inputFile = '';
  const outputFile = `${converted}/mergeFilesss-${new Date().getTime()}.pdf`;

  for (let file of req.files) {
    inputFile += ` ${file.path} `;
  }

  const RES_merge = await pdf.merge(inputFile, outputFile);

  res.send({
    status: RES_merge.is,
    message: RES_merge.message,
    download: `${req.server.fullPath}/downloads/${outputFile}`
  });
  
}; // Function: merge.controller()
