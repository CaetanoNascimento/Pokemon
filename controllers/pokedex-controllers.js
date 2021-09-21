const mysql = require('../mysql');

exports.getPokemon = async(req, res, next) => {
    try {
        const result = await mysql.execute('SELECT * FROM pokemon')
        const response = {
            pokemon: result.map(pokemon => {
                return{
                    id_pokemon: pokemon.id_pokemon,
                    nome_pokemon: pokemon.nome_pokemon,
                    ataque_pokemon: pokemon.ataque_pokemon,
                    experiencia: pokemon.experiencia,
                    tipo_pokemon: pokemon.tipo_pokemon,
                    color: pokemon.color,
                    imagem_pokemon: pokemon.imagem_pokemon
                }
            })
        }
        return res.status(201).send(response);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error })
    }
}