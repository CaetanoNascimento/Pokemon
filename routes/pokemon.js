const express = require('express');
const router = express.Router();
const multer = require('multer');

const pokemonControll = require('../controllers/pokemon-controllers');

const storeg = multer.diskStorage({

    destination: function (req, file, cb){
        cb(null, './public/uploads/');
    },
    filename: function(req, file, cb){
        cb(null,file.originalname)
    }
})

const upload = multer({ 
    storage: storeg
});


//router.get('/', pokemonControll.getPokemon);

router.post('/',upload.single('imagem_pokemon'), pokemonControll.postPokemon);

//router.delete('/', pokemonControll.deletePokemon);

//router.get('/:id_pokemon', pokemonControll.getUmPokemon);


module.exports = router