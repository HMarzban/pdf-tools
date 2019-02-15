const downloadRouter = require('./download/dowanload-router');
const pdfRouters = require('./pdf/_init');

const handleRouter = app => {
  app.use('/downloads', downloadRouter);
  app.use('/api/pdf', pdfRouters);
}; // Function: handleRouter()

module.exports = handleRouter;

/**
 * API ROUTE:
 */

// api/pdf/compress
// api/pdf/extract
// api/pdf/decrypt
// api/pdf/encrypt
// api/pdf/merge

// api/pdf/to/png
// api/pdf/to/jpg
// api/pdf/to/bmp
// api/pdf/to/psd
// api/pdf/to/eps
// api/pdf/to/txt

// api/pdf/to/word
// api/pdf/to/excel
// api/pdf/to/ppt

// api/pdf/from/word
// api/pdf/from/excel
// api/pdf/from/ppt
// api/pdf/from/jpeg

//= =================>>>>>>
