'use strict';

const Pokemon = require('../models/Pokemon');
const { apiResponse } = require('../utils/common');

const create = async (req, res, next) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();

    return res.json(pokemon);

  } catch(error) {
    return next(error);
  }
}

const getAll = async (req, res, next) => {
  try {
    const pokemons = await Pokemon.find();
    return res.json(apiResponse(pokemons));

  } catch(error) {
    return next(error);
  }
}

const get = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    return res.json(apiResponse(pokemon));

  } catch(error) {
    return next(error);
  }
}

const update = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    pokemon.name = req.body.name;
    pokemon.save();

    return res.json(apiResponse(pokemon));

  } catch(error) {
    return next(error);
  }
}

const deleteP = async (req, res, next) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    pokemon.deleteOne();

    return res.json(apiResponse(pokemon));

  } catch(error) {
    return next(error);
  }
}

module.exports = {
  create,
  getAll,
  get,
  update,
  deleteP
}
