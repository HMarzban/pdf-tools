const pdf = require('pdf-parse');

module.exports = path => {
  return new Promise(async (resolve, reject) => {
    try {
      const pdfInfo = await pdf(path);
      pdfInfo['pageCount'] = pdfInfo.numpages || pdfInfo.numrender;
      resolve(pdfInfo);
    } catch (error) {
      reject(error.message);
    }
  }); // @Promis()
}; // @Function: pdfDetails()
