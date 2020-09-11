'use strict';

const server = require('./config/express');
const mongoonseInit = require('./config/mongoose');

server();
mongoonseInit();
