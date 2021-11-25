const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const rotaPokemon = require('./routes/pokemon');
const rotaPokedex = require('./routes/pokedex');
const rotaLegendary = require('./routes/legendary')


app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + ('/public/index.html'))
})

app.get('/pokedex', (req, res) => {
    res.sendFile(__dirname + ('/public/paginas/pokedex.html'))
})
app.get('/legendary', (req, res) => {
    res.sendFile(__dirname + ('/public/paginas/legendaries.html'))
})

app.use('/pokemon', rotaPokemon);
app.use('/pokedexx', rotaPokedex);
app.use('/legendary', rotaLegendary);

module.exports = app