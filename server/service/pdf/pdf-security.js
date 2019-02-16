const { ExecuteCommand } = require('../../utils/command');

/**
 * Encrypt pdf file.
 * @param {input} input 
 * @param {input} output 
 * @param {input} password 
 * @param {input} keyLength 
 */
const encrypt = (input, output, password, keyLength = '128' || '40' || '256') => {
  if (!input) throw Error('Inputs is not set!');

  if (!output) throw Error('Outpud is not set!');

  if (!password) throw Error('Password is not set!');

  // ex: qpdf --encrypt <PASSWORD> <PASSWORD> <keyLength> -- <input.pdf> <output.pdf>
  const command = ` qpdf --encrypt ${password} ${password} ${keyLength} -- ${input} ${output}`;

  return new Promise( async (resolve, reject)=>{
    try {
      await ExecuteCommand(command, 'Encrypt pdf');
      resolve({is: true, message: "Encrypt pdf done."});
    } catch (error) {
      reject({is: false, message: error.message})
    }
  }); // @Promis()
  
}; // @Function: encrypt()

/**
 * Decrypt pdf file
 * @param {input} input 
 * @param {input} output 
 * @param {input} password 
 */
const decrypt = (input, output, password) => {

  if (!input) throw Error('Inputs is not set!');

  if (!output) throw Error('Outpud is not set!');

  if (!password) throw Error('Password is not set!');

  // ex: qpdf --password=<PASSWORD> --decrypt <input.pdf> <output.pdf>
  const command = `qpdf --password=${password} --decrypt ${input} ${output} `;

  return new Promise( async (resolve, reject) => {
    try {
      await ExecuteCommand(command, 'Decrypt pdf');
      resolve({is: true, message: "Decrypt pdf done."});
    } catch (error) {
      reject({is: false, message: error.message})
    }
  }) //@Promis()
  
}; // @Function: encrypt()

module.exports = {
  encrypt,
  decrypt
};
