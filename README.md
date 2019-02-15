# pdf-tools
pdf convert, edite, view, lock and ...





## TODO:

- [x] PDF Compress
- [x] PDF Encrypt
- [x] PDF Decrypt
- [x] PDF Extract Pages
- [x] PDF Merge
- [x] PDF to PNG
- [x] PDF to JPG
- [x] PDF to BMP
- [x] PDF to PSD
- [x] PDF to EPS
- [x] PDF to TXT
- [x] PDF to WORD
- [x] PDF to EXCEL
- [x] PDF from WORD
- [x] PDF from EXCEL
- [x] PDF from PPT
- [x] PDF from JPEG

- [ ] PDF Page Delete
- [ ] PDF Page Rotate
- [ ] PDF Page Esign
- [ ] Start to integrate back-end to front-end






## Linux Server command used:

 ```bash

        $ qpdf --password=<PASSWORD> --decrypt <input.pdf> <output.pdf>

        $ qpdf --encrypt <PASSWORD> <PASSWORD> <keyLength> -- <input.pdf> <output.pdf>

        $ zip -j <output.zip> <input1.*> <input1.*> <input1.*>

        $ pdftotext -layout <input.pdf> <output.txt>

        $ gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=<output.pdf> <input1.pdf> <input2.pdf>

        $ gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -dFirstPage=<StarPage> -dLastPage=<EndPage> -sOutputFile=<output.pdf> <input.pdf>

        $ gs -dQUIET -dBATCH -dNOPAUSE -sDEVICE=<device> -r<res> -dFirstPage=<startPage> -dLastPage=<lastPage> -sOutputFile=<output name>_%d<output format> <input.pdf>

        $ gs -dNOPAUSE -dQUIET -dBATCH -sDEVICE=pdfwrite -dPDFSETTINGS=/<setQuality> -sOutputFile=<input.pdf> <output.pdf>

        $ soffice --headless --infilter="writer_pdf_import" --convert-to doc <input.pdf> --outdir <output.docx>

        $ soffice --headless --convert-to xlsx:"Calc MS Excel 2007 XML" <input.csv>  --outdir <output.exls>

        $ libreoffice --headless --convert-to pdf <input.docx> --outdir <output.pdf>

        $ libreoffice --headless --convert-to pdf <input.exls> --outdir <output.pdf>

        $ libreoffice --headless --convert-to pdf <input.ppt> --outdir <output.pdf>

        $ convert <input.png> <output.pdf>

  ```