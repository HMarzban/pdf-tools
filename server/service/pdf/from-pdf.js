const { ExecuteCommand } = require('../../utils/command');

/**
 * Convert word.docx to pdf file
 * @param {String} input 
 * @param {String} output 
 */
const WORD_to_PDF = (input, output) => {
  const dira = output.split('/');
  const fileName = output.split('/')[dira.length - 1];

  // remove last part of addrees whiche contaion file name
  const outputDIR = output.replace(fileName, '');

  // ex: libreoffice --headless --convert-to pdf <input.docx> --outdir <output.pdf>
  const command = `libreoffice --headless --convert-to pdf ${input} --outdir ${outputDIR}`;

  return new Promise(async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'convert from word to pdf');
      resolve({is: true, message: "convert to pdf don."});
    } catch (error) {
      reject({is: false, message:error.message});
    }
  }); // Promise()

}; // @Function: WORD_to_PDF()

/**
 * Convert excel.exls to pdf file
 * @param {String} input 
 * @param {String} output 
 */
const EXCEL_to_PDF = (input, output) => {
  const dira = output.split('/');
  const fileName = output.split('/')[dira.length - 1];

  // remove last part of addrees whiche contaion file name
  const outputDIR = output.replace(fileName, '');

  // ex: libreoffice --headless --convert-to pdf <input.exls> --outdir <output.pdf>
  const command = `libreoffice --headless --convert-to pdf ${input} --outdir ${outputDIR}`;

  return new Promise(async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'convert from excel to pdf');
      resolve({is: true, message: "convert to pdf don."});
    } catch (error) {
      reject({is: false, message:error.message});
    }
  }); // Promise()

}; // @Function: EXCEL_to_PDF()

/**
 * Convert powerpoint.ppt tp pdf file
 * @param {String} input 
 * @param {String} output 
 */
const PPT_to_PDF = (input, output) => {
  const dira = output.split('/');
  const fileName = output.split('/')[dira.length - 1];

  // remove last part of addrees whiche contaion file name
  const outputDIR = output.replace(fileName, '');

  // ex: libreoffice --headless --convert-to pdf <input.ppt> --outdir <output.pdf>
  const command = `libreoffice --headless --convert-to pdf ${input} --outdir ${outputDIR}`;

  return new Promise(async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'convert from ppt to pdf');
      resolve({is: true, message: "convert to pdf don."});
    } catch (error) {
      reject({is: false, message:error.message});
    }
  }); // Promise()

}; // @Function: PPT_to_PDF()

/**
 * Convert images to pdf file
 * @param {String} input 
 * @param {String} output 
 */
const JPG_to_PDF = (input, output) => {

  // ex: convert <input.png> <output.pdf>
  const command = `convert ${input} ${output}`;

  return new Promise(async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'convert from jpegs to pdf');
      resolve({is: true, message: "convert to pdf don."});
    } catch (error) {
      reject({is: false, message:error.message});
    }
  }); // Promise()

}; // @Function: JPG_to_PDF()

module.exports = {
  WORD_to_PDF,
  EXCEL_to_PDF,
  PPT_to_PDF,
  JPG_to_PDF
};
