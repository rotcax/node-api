'use strict';

const express     = require('express');
const routes      = require('../routes');
const bodyParser  = require('body-parser');

const initServer = () => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use('/api', routes);
  
  app.listen(3001, () => console.log('Server started'));
}

module.exports = initServer;
