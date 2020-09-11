'use strict';

const mongoose = require('mongoose');

const mongooseInit = () => {
  mongoose.connect('mongodb://localhost/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const database = mongoose.connection;

  database.on('error', console.error.bind(console, 'connection error'));
  database.once('open', () => {
    console.log('MongoDB Started');
    console.log(`DB ${database.name} in ${database.host}:${database.port}`);
  });
}

module.exports = mongooseInit;
