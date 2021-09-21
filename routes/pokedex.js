const express = require('express')
const router = express.Router();

const pokemonControll = require('../controllers/pokedex-controllers');





//router.post('/')

router.get('/', pokemonControll.getPokemon);

router.get('/:id_pokemon', pokemonControll.getUmPokemon);

module.exports = router