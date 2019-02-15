const { ExecuteCommand } = require('../utils/command');

const QUALITY = ['screen', 'ebook', 'printer', 'prepress', 'default'];

const pdf = {};

pdf.compress =  (input, output, quality = 'default') => {
  const setQuality = QUALITY.indexOf(quality) !== -1 ? quality : 'default';

  //ex: gs -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/<setQuality> -sOutputFile=<input.pdf> <output.pdf>
  const command = `gs -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/${setQuality} -sOutputFile=${output} ${input}`;

  return new Promise( async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'compress pdf');
      resolve({is:true, message: "pdf compress done."});
    } catch (error) {
      console.log(error.message);
      reject({is:false, message: error.message});
    }
  }); //@Promis()
 
}; // @Function: pdf.compress()

pdf.convert2img = async (input, output, device, format, startPage, lastPage, res = '150') => {

  // ex: gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=<device> -r<res> -dFirstPage=<startPage> -dLastPage=<lastPage> -sOutputFile=<output name>_%d<output format> <input.pdf>
  let command = `gs -dQUIET -dBATCH -dNOPAUSE  `;

  if (device) command += ` -sDEVICE=${device} `;
  else throw Error('Device - format is not set');

  if (res) command += ` -r${res} `;

  if (startPage) command += ` -dFirstPage=${startPage} `;

  if (startPage && lastPage) command += ` -dLastPage=${lastPage} `;

  if (output && format) command += ` -sOutputFile=${output}_%d${format} `;
  else throw Error('Output is not set!');

  if (input) command += ` ${input} `;
  else throw Error('Input is not set!');

  return new Promise((resolve, reject) =>{
    try {
      await ExecuteCommand(command, 'Convert Image');
      resolve({is: true, message: `convert to ${format} done`});
    } catch (error) {
      console.log(error.message);
      reject({is: false, message: error.message});
    }
  }); // @Promis()
  
}; // @Function: convertImage();

// Extract pages from a PDF file:
// gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=output.pdf input.pdf
// extrac page 1 to 3
// extrac page 3 to 4
// extrac page 4 to 4
/**
 * @param {String} input
 * @param {String} output
 * @param {String} startPage
 * @param {String} lastPage
 */
pdf.extrac = (input, output, startPage = '1', lastPage = '1') => {

  // ex: gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -dFirstPage=<StarPage> -dLastPage=<EndPage> -sOutputFile=<output.pdf> <input.pdf>
  let command = `gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite `;

  if (startPage) command += ` -dFirstPage=${startPage} `;

  if (startPage && lastPage) command += ` -dLastPage=${lastPage} `;

  if (output) command += ` -sOutputFile=${output}.pdf `;
  else throw Error('Output is not set!');

  if (input) command += ` ${input} `;
  else throw Error('Input is not set!');

  return new Promise( async (resolve, reject)=>{
    try {
      await ExecuteCommand(command, 'Extract pages');
      resolve({is: true, message: "pdf extrac done."});
    } catch (error) {
      console.log(error.message);
      reject({is: false, message: error.message});
    }
  }); // @Promis()
  
}; // @Function: pdf.extrac();

pdf.merge = (inputs, output) => {
  // Merge PDF files:

  // ex: gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=<output.pdf> <input1.pdf> <input2.pdf>
  let command = `gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite`;

  if (output) command += ` -sOutputFile=${output} `;
  else throw Error('Output is not set!');

  if (inputs) {
    command += ` ${inputs} `;
  } else {
    throw Error('Inputs is not set!');
  }

  return new Promise((resolve, reject) => {
    try {
      await ExecuteCommand(command, 'Convert Image');
      resolve({is: true, message: "pdf merge done."});
    } catch (error) {
      console.log(error.message);
      reject({is: false, message: error.message});
    }
  }); // @Promis()

  
}; // @Function: pdf.merge();

module.exports = pdf;
