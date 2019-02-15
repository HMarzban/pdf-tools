const express = require('express');
const ip = require('ip');
const app = express();
const chalk = require('chalk');
const PORT = process.env.PORT || 3000;
const setEnvironment = require('./server/config/env');
const setRouter = require('./server/api/init');

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
            External: ${chalk.blueBright(`http://${ip.address()}:${PORT}`)}
            Local:    ${chalk.blueBright(`http://localhost:${PORT}`)}
            ------------------------------------
            ENV:      ${chalk.yellow(process.env.NODE_ENV)} mode!
        `);
});
