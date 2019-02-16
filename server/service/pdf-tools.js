
const pdf = require('pdf-parse');

const {decrypt, encrypt} = require("./pdf/pdf-security");
const {compress, convert2img, merge, extrac} = require("./pdf/pdf-tools");
const {toEXCEL,toPPT,toWORD} = require("./pdf/pdf-office");
const {EXCEL_to_PDF, JPG_to_PDF, PPT_to_PDF, WORD_to_PDF} = require("./pdf/from-pdf");


/**
 * Obtain pdf file information
 * @param {String} path
 */
const pdfDetails = path => {
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




class PDF {
    static decrypt (){
        return decrypt;
    }

    static encrypt (){
        return encrypt;
    }

    static merge (){
        return merge;
    }

    static compress (){
        return compress;
    }

    static extrac (){
        return extrac;
    } 

    static convert2img (){
        return convert2img
    }

    static ToEXCEL (){
        return toEXCEL;
    }

    static ToPPT (){
        return toPPT;
    }

    static ToWORD (){
        return toWORD;
    }

    static FromEXCEL (){
        return EXCEL_to_PDF;
    }
    
    static FromJPG(){
        return JPG_to_PDF;
    }

    static FromPPT(){
        return PPT_to_PDF;
    }

    static FromWORD(){
        return WORD_to_PDF;
    }

    static details(){
        return pdfDetails;
    }

} // @Class: pdf()


module.exports = PDF;



