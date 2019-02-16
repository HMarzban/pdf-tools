const officegen = require('officegen');
const fs = require('fs-extra');
const { ExecuteCommand } = require('../../utils/command');
const pdf = require('../pdf-tools');



/**
 * Convert fileName.pdf to fileName.docx
 * @param {String} input
 * @param {String} output
 */
const toWORD = (input, output) => {

  // NOTE: output must just directory! file name chose form input.

  // ex: soffice --headless --infilter="writer_pdf_import" --convert-to doc <input.pdf> --outdir <output.docx>
  const command = `soffice --headless --infilter="writer_pdf_import" --convert-to doc ${input} --outdir ${output}`;

  return new Promise(async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'Convert to Word');
      resolve({is: true, message: "convert done."});
    } catch (error) {
      reject({is: true, message: error.message});
    }
  }); // Promise()

}; // @ Function: office.toWORD()

/**
 * Convert fileName.pdf to fileName.ppt
 * @param {String} input
 * @param {String} output
 */
const toPPT = async (input, output) => {
  return new Promise(async (resolve, reject) => {
    const pptx = officegen('pptx');
    const wrapeOutputFiles = [];

    pptx.on('finalize', function(written) {
      // clear the temporatory files
      for (file of wrapeOutputFiles) {
        fs.removeSync(file);
      }

      console.log('Finish to create a PowerPoint file');
      resolve('done');
    });

    pptx.on('error', function(err) {
      reject(err);
    });

    let pdfCountPages = await pdf.details(input);
    pdfCountPages = pdfCountPages['pageCount'];

    const Device = 'png16m';
    const Format = '.png';

    const inputFile = input;
    const outputFile = `${output.replace(/\.[^/.]+$/, '')}`;

    const startPage = 1;
    const lastPage = parseInt(pdfCountPages);
    const resolution = '300';
    const responseConvert = await pdf.convert2img(
      inputFile,
      outputFile,
      Device,
      Format,
      startPage,
      lastPage,
      resolution
    );

    for (let i = startPage; i <= lastPage; i++) {
      wrapeOutputFiles.push(`./${outputFile}_${i}${Format}`);
    }

    await generateImageSlides(pptx, wrapeOutputFiles);

    const out = fs.createWriteStream(output);
    out.on('error', function(err) {
      reject(err);
    });
    pptx.generate(out);
  }); //Resolve
}; // @ Function: office.toPPT()

/**
 * Convert fileName.pdf to fileName.exls
 * @param {String} input
 * @param {String} output
 */
const toEXCEL = (input, output) => {
  return new Promise(async (resolve, reject) => {
    // first convert to text then convert to excel

    try {

      const inputPDF = input;
      const outputCSV = `${output.replace(/\.[^/.]+$/, '')}.csv`;

      // Convert to text/csv
      // ex: pdftotext -layout <input.pdf> <output.csv>
      const convertToCsvCommadn = `pdftotext -layout ${inputPDF} ${outputCSV}`;

      await ExecuteCommand(convertToCsvCommadn, 'convert To scv');

      const inputSCV = outputCSV;

      const dira = inputSCV.split('/');
      const fileName = inputSCV.split('/')[dira.length - 1];

      // remove last part of addrees whiche contaion file name
      const outputEXCEL = inputSCV.replace(fileName, '');

      // Convert csv file to excel
      // ex: soffice --headless --convert-to xlsx:"Calc MS Excel 2007 XML" <input.csv>  --outdir <output.exls>
      const convertToExcel = `soffice --headless --convert-to xlsx:"Calc MS Excel 2007 XML" ${inputSCV}  --outdir ${outputEXCEL}`;

      await ExecuteCommand(convertToExcel, 'convert to excel');

      // Remove CSV file after convert don.

      fs.removeSync(outputCSV);

      resolve({is: true, message: "convert done."});
    } catch (error) {
      reject({is: false, message: error.message});
    }
  }); // Promis()

}; // @ Function: office.EXCEL()


/**
 * Create powerpoint page and set image center of page
 * @param {Object} pptx
 * @param {Array} imageList
 */
function generateImageSlides(pptx, imageList) {
  return new Promise(resolve => {
    pptx.setSlideSize(595, 842, 'A4');
    let slide = null;
    for (let image of imageList) {
      slide = pptx.makeNewSlide();
      slide.addImage(image, { y: 0, x: 0, cy: '100%', cx: '100%' });
    }
    resolve('done');
  }); // @promis()
} // @Function: generateImageSlides()


module.exports = {
  toWORD,
  toPPT,
  toEXCEL
};