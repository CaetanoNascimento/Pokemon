const express = require('express')
const router = express.Router();
const multer = require('multer');
const pokemonControll = require('../controllers/legendary-controllers');


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



router.get('/todos', pokemonControll.getPokemon);

router.get('/:id_legendary', pokemonControll.getUmLegendary);

router.get('/pokemon/:nivel', pokemonControll.getNivel);

router.post('/',upload.single('imagem_pokemon'), pokemonControll.postPokemon);

module.exports = router