## Prototype status

This is an earlier PDF-processing backend prototype. The checklist below distinguishes implemented conversions from unfinished UI and test work. It depends on native conversion tools; review the original environment before running it.

# pdf-tools
PDF converter, editor and so on, Meven Appliaction.





## Lists of Linux packages are used:

  ```bash
      $ convert
      $ libreoffice
      $ soffice
      $ gs
      $ pdftotext
      $ zip
      $ qpdf
  ```


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
- [ ] Start to make endpoint test


## Local setup and a request

Install the native executables listed above before trying a conversion. The original service invokes external programs rather than implementing PDF conversion itself. Then, from the repository root:

```sh
npx --yes yarn@1.22.22 install --frozen-lockfile
node index.js
```

The default port is 3000 (`PORT` overrides it). A compression request uses the multipart field `pdf`:

```sh
curl -F 'pdf=@sample.pdf' http://localhost:3000/api/pdf/compress
```

The controller returns a conversion status, message, and download URL. Inspect the result before using it. The command shape is verified against the current route and controller; native conversion behavior has not been rerun in this documentation pass. The front-end integration and endpoint-test items in the original checklist remain unfinished.
