const { ExecuteCommand } = require('../utils/command');

const zip = async (input, output, message = "zip files done.") => {

  // ex: zip -j <output.zip> <input1.*> <input1.*> <input1.*>
  let command = `zip -j -m -9 `;

  if (output) command += ` ${output} `;
  else throw Error('Output is not set!');

  if (input) command += ` ${input} `;

  
  return new Promise((resolve, reject)=>{
    try {
      await ExecuteCommand(command, 'zip file');
      resolve({is: true, message});
    } catch (error) {
      console.log(error.message);
      reject({is: false, message });
    }
  }); // @Promis()
  
}; // @Function: zip()

module.exports = zip;
