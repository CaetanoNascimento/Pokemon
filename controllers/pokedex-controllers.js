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

exports.getUmPokemon = async(req, res, next) => {
    try {
        const query = 'SELECT * FROM pokemon WHERE id_pokemon = ?'

        const result = await mysql.execute(query, [ req.params.id_pokemon])

        const response = {
            mensagem: 'pokemon selecionado com sucesso',
            pokemon:{
                id_pokemon: result[0].id_pokemon,
                nome_pokemon: result[0].nome_pokemon,
                ataque_pokemon: result[0].ataque_pokemon,
                experiencia: result[0].experiencia,
                tipo_pokemon: result[0].tipo_pokemon,
                color: result[0].color,
                imagem_pokemon: result[0].imagem_pokemon

            }
        }
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}