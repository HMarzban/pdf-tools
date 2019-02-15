const { encrypt, decrypt } = require('../../../service/pdf-security');

const ENCRYPTcontroller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;
  const password = req.body.password;

  const response_encrypt = await encrypt(inputFile, outputFile, password);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename}`
  });
}; // @Function: ENCRYPT_controller()

const DECRYPTcontroller = async (req, res) => {
  const converted = req['SConfig'].convertURL;

  const inputFile = req.file.path;
  const outputFile = `${converted}/${req.file.filename}`;
  const password = req.body.password;
  const keyLength = req.body.keyLength || '128';

  const response_encrypt = await decrypt(inputFile, outputFile, password, keyLength);

  res.send({
    msg: 'success upload',
    download: `${req.server.fullPath}/downloads/${converted}/${req.file.filename}`
  });
}; // @Function: DECRYPT_controller()

module.exports = {
  ENCRYPTcontroller,
  DECRYPTcontroller
};
