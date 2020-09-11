'use strict';

const express = require('express');
const { create, getAll, get, update, deleteP } = require('../controllers/pokemon');

const router = express.Router();

router.get('/test', (req, res, next) => {
  return res.json({ result: 'Hello' });
});

router.post('/test', (req, res, next) => {
  return res.json({ result: req.body.name });
});

router.post('/pokemon', create);
router.get('/pokemon', getAll);
router.get('/pokemon/:id', get);
router.put('/pokemon/:id', update);
router.delete('/pokemon/:id', deleteP);

module.exports = router;
