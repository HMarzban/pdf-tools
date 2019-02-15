const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');

function middlewareAppConfig(req, res, next) {
  req.server = {
    protocol: req.protocol,
    host: req.get('host'),
    pathName: req.originalUrl,
    fullPath: `${req.protocol}://${req.get('host')}`
  };

  req.SConfig = {
    upload: 'server/tmp/upload',
    convert: 'server/tmp/convert',
    convertURL: null
  };

  const converted = `${req.SConfig.convert}/${new Date().getFullYear()}/${new Date().getDay()}`;

  req.SConfig.convertURL = converted;

  if (!fs.existsSync(`./${converted}`)) fs.mkdirsSync(`./${converted}`);

  next();
} // @Function: middlewareAppConfig()

function setDevEnv(app) {
  process.env.NODE_ENV = 'Development';
  process.env.DB_URL = 'mongodb://localhost:27017/dev-db';
  process.env.TOKEN_SECRET = 'my-development-secret';
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.static(`${__dirname}/convert`));
  app.use(middlewareAppConfig);
}

function setProdEnv(app) {
  process.env.NODE_ENV = 'Production';
  process.env.DB_URL = 'mongodb://localhost:27017/prod-db';
  process.env.TOKEN_SECRET = 'my-production-secret';
  app.use(bodyParser.json());
  app.use(express.static(`${__dirname}../../client/dist`));
  app.use(express.static(`${__dirname}/convert`));
  app.use(middlewareAppConfig);
}

module.exports = function setEnvironment(app) {
  if (process.env.NODE_ENV !== 'production') {
    setDevEnv(app);
  } else {
    setProdEnv(app);
  }
};
