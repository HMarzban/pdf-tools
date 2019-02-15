const pdf = require('../../../service/pdf-tools');
const zip = require('../../../service/zip-files');
const pdfDetails = require('../../../service/pdf-details');

const PNG_controller = async (req, res) => {
  // PNG file format
  // For normal use we recommend png16m for 24-bit RGB color, or pnggray for grayscale.

  // The png256, png16 and pngmono devices respectively provide 8-bit color, 4-bit color
  // and black-and-white for special needs.

  // The pngalpha device is 32-bit RGBA color with transparency indicating pixel coverage.
  //= ========================================================================================

  //  Source: http://www.libpng.org/pub/png/png-sitemap.html

  //  -sDEVICE ==> "png16m" , "pnggray" <== || ==> "png256", "png16", "pngmono"

  //  png16m for 24-bit RGB color
  //  pnggray for grayscale
  //  png256 for 8-bit RGB color
  //  png16 for 4-bit RGB color
  //  pngmono for black-and-white

  /*
     gs -dSAFER -dBATCH -dNOPAUSE -sDEVICE=png16m -dGraphicsAlphaBits=4 \
        -sOutputFile=tiger.png examples/tiger.png
     */

  /*
    gs -dSAFER -dBATCH -dNOPAUSE -r150 -sDEVICE=pnggray -dTextAlphaBits=4 \
        -sOutputFile=doc-%02d.png doc.pdf 
    */

  const converted = req['SConfig'].convertURL;

  let pdfCountPages = await pdfDetails(`${req.file.path}`);
  pdfCountPages = pdfCountPages['pageCount'];

  const Device = 'png16m';
  const Format = '.png';

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;

  const startPage = req.body.startPage || 0;
  const lastPage = req.body.lastPage || parseInt(pdfCountPages);

  const resolution = req.body.res || '300';

  convert(res, req, {convert, inputFile, outputFile, Device, Format, startPage, lastPage, resolution});
  
}; // @Function: PNG_controller()

const JPG_controller = async (req, res) => {
  // these are the jpeg and jpeggray devices

  // gs -sDEVICE=jpeg -sOutputFile=foo.jpg foo.ps

  const converted = req['SConfig'].convertURL;

  let pdfCountPages = await pdfDetails(`${req.file.path}`);
  pdfCountPages = pdfCountPages['pageCount'];

  const Device = 'jpeg';
  const Format = '.jpg';

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;

  const startPage = req.body.startPage || 0;
  const lastPage = req.body.lastPage || parseInt(pdfCountPages);

  const resolution = req.body.res || '300';

 
  convert(res, req, {convert, inputFile, outputFile, Device, Format, startPage, lastPage, resolution});
  

  
}; // @Function: JPG_Controller()

const BMP_controller = async (req, res) => {
  // BMP is a simple uncompressed image format commonly used on MS Windows.
  // It is supported by the devices bmpmono bmpgray bmpsep1 bmpsep8 bmp16 bmp256 bmp16m bmp32b.

  // gs -sDEVICE=jpeg -sOutputFile=foo.jpg foo.ps

  const converted = req['SConfig'].convertURL;

  let pdfCountPages = await pdfDetails(`${req.file.path}`);
  pdfCountPages = pdfCountPages['pageCount'];

  // "bmpmono", "bmpgray", "bmpsep1", "bmpsep8", "bmp16", "bmp256", "bmp16m", "bmp32b"
  const Device = 'bmp256';
  const Format = '.BMP';

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;

  const startPage = req.body.startPage || 0;
  const lastPage = req.body.lastPage || parseInt(pdfCountPages);

  const resolution = req.body.res || '300';

  convert(res, req, {convert, inputFile, outputFile, Device, Format, startPage, lastPage, resolution});
  
}; // Function: BMP_controller()

const PSD_controller = async (req, res) => {
  // BMP is a simple uncompressed image format commonly used on MS Windows.
  // It is supported by the devices bmpmono bmpgray bmpsep1 bmpsep8 bmp16 bmp256 bmp16m bmp32b.

  // gs -sDEVICE=jpeg -sOutputFile=foo.jpg foo.ps

  const converted = req['SConfig'].convertURL;

  let pdfCountPages = await pdfDetails(`${req.file.path}`);
  pdfCountPages = pdfCountPages['pageCount'];

  // "psdcmyk", "psdrgb"
  const Device = 'psdcmyk';
  const Format = '.psd';

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;

  const startPage = req.body.startPage || 0;
  const lastPage = req.body.lastPage || parseInt(pdfCountPages);

  const resolution = req.body.res || '300';

  convert(res, req, {convert, inputFile, outputFile, Device, Format, startPage, lastPage, resolution});
  
}; // Function: BMP_controller()

const EPS_controller = async (req, res) => {
  // BMP is a simple uncompressed image format commonly used on MS Windows.
  // It is supported by the devices bmpmono bmpgray bmpsep1 bmpsep8 bmp16 bmp256 bmp16m bmp32b.

  // gs -sDEVICE=jpeg -sOutputFile=foo.jpg foo.ps

  const converted = req['SConfig'].convertURL;

  let pdfCountPages = await pdfDetails(`${req.file.path}`);
  pdfCountPages = pdfCountPages['pageCount'];

  // "psdcmyk", "psdrgb"
  const Device = 'eps2write';
  const Format = '.eps';

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;

  const startPage = req.body.startPage || 0;
  const lastPage = req.body.lastPage || parseInt(pdfCountPages);

  // it's better always to be high resolution
  const resolution = '600';

  convert(res, req, {convert, inputFile, outputFile, Device, Format, startPage, lastPage, resolution});
  
}; // Function: BMP_controller()

const TXT_controller = async (req, res) => {
  // BMP is a simple uncompressed image format commonly used on MS Windows.
  // It is supported by the devices bmpmono bmpgray bmpsep1 bmpsep8 bmp16 bmp256 bmp16m bmp32b.

  // gs -sDEVICE=jpeg -sOutputFile=foo.jpg foo.ps

  const converted = req['SConfig'].convertURL;

  let pdfCountPages = await pdfDetails(`${req.file.path}`);
  pdfCountPages = pdfCountPages['pageCount'];

  // "psdcmyk", "psdrgb"
  const Device = 'txtwrite ';
  const Format = '.txt';

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}`;

  const startPage = req.body.startPage || 0;
  const lastPage = req.body.lastPage || parseInt(pdfCountPages);

  // it's better always to be high resolution
  const resolution = '600';

  convert(res, req, {convert, inputFile, outputFile, Device, Format, startPage, lastPage, resolution});
  
}; // Function: BMP_controller()


const convert = (res, req, data) => {


  const RES_convert = await pdf.convert2img(
    data.inputFile,
    data.outputFile,
    data.Device,
    data.Format,
    data.startPage,
    data.lastPage,
    data.resolution
  );

  let wrapeOutputFiles = '';
  for (let i = data.startPage; i <= data.lastPage; i++) {
    wrapeOutputFiles += ` ${data.outputFile}_${i}${data.Format} `;
  }

  let RES_zip = await zip(
    wrapeOutputFiles,
    `${data.converted}/${req.file.filename.replace(/\.[^/.]+$/, '')}.zip`
  );

  res.send({
    status: (RES_zip.is && RES_convert.is),
    message: RES_convert.message,
    download: `${req.server.fullPath}/downloads/${data.converted}/${req.file.filename.replace(
      /\.[^/.]+$/,
      ''
    )}.zip`
  });
} // @Function: convert()



module.exports = {
  PNG_controller,
  JPG_controller,
  BMP_controller,
  PSD_controller,
  EPS_controller,
  TXT_controller
};
