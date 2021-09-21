const express = require('express')
const router = express.Router();

const pokemonControll = require('../controllers/pokedex-controllers');




//router.post('/')

router.get('/', pokemonControll.getPokemon)

module.exports = router