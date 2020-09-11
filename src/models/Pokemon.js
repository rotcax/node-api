'use strict';

const { Schema, model } = require('mongoose');

const PokemonSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }
});

module.exports = model('Pokemon', PokemonSchema, 'pokemon');
