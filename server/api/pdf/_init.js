const compressRouter = require('./compress/compress-route');
const extracRouter = require('./extrac/extrac-router');
const mergeRouter = require('./merge/merge-route');
const convert2img = require('./to/convert-route');
const secureRouter = require('./secure/secure-route');
const officeRouter = require('./office/office-route');
const fromRouter = require('./from/convertTo-route');

const routerList = [
  compressRouter,
  extracRouter,
  mergeRouter,
  convert2img,
  secureRouter,
  officeRouter,
  fromRouter
];

module.exports = routerList;
