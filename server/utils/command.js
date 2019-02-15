const childProcess = require('child_process');

const ExecuteCommand = async (command, commandName) => {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (err, stdout) => {
      console.log(stdout);
      if (err) reject(`[${commandName} err]: ${err.message}`);

      if (stdout.indexOf('Unknown') >= 1) reject(`[${commandName} err]: ${stdout}`);

      resolve('Operation Done');
    });
  }); // @Promis
}; // @Function: ExecuteCommand();

module.exports = {
  ExecuteCommand
};
