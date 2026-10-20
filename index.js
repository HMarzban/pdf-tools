const os = require('os');
const express = require('express');
const app = express();
const chalk = require('chalk');
const PORT = process.env.PORT || 3000;
const setEnvironment = require('./server/config/env');
const setRouter = require('./server/api/init');

function getExternalAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      const isIPv4 = net.family === 'IPv4' || net.family === 4;
      if (isIPv4 && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
}

setEnvironment(app);
setRouter(app);

// handle every other route with index.html, SPA
/* app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist/index.html'));
}); */

// App Listen Port and Run
app.listen(PORT, () => {
  console.info(`
            Server ready to serve, You Can access it:
            ------------------------------------
            External: ${chalk.blueBright(`http://${getExternalAddress()}:${PORT}`)}
            Local:    ${chalk.blueBright(`http://localhost:${PORT}`)}
            ------------------------------------
            ENV:      ${chalk.yellow(process.env.NODE_ENV)} mode!
        `);
});
