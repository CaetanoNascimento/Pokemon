const mysql = require('../mysql');

exports.postPokemon = async (req, res, next) => {
    try {
        const queryPokemon = 'INSERT INTO legendary (pokemon_legendary,imagem_pokemon,descricao,hp,ataque,defesa,ataque_especial,defesa_especial,xp,nivel) VALUES (?,?,?,?,?,?,?,?,?,?)';
        const resultPokemon = await mysql.execute(queryPokemon, [
            req.body.pokemon_legendary,
            req.file.path.replace("public", ""),
            req.body.descricao,
            req.body.hp,
            req.body.ataque,
            req.body.defesa,
            req.body.ataque_especial,
            req.body.defesa_especial,
            req.body.xp,
            req.body.nivel
        ])

        const response = {
            mensagem: 'Pokemon Lendario inserido com sucesso',
            pokemonCriado: {
                id_legendary: resultPokemon.id_legendary,
                pokemon_legendary: req.body.pokemon_legendary
            }
        }
        return res.status(201).send(response);
    } catch (error) {

        return res.status(500).send({ error: error })
    }
}

exports.getPokemon = async (req, res, next) => {
    try {
        const result = await mysql.execute('SELECT * FROM legendary')
        const response = {
            pokemon: result.map(pokemon => {
                return {
                    id_legendary: pokemon.id_legendary,
                    pokemon_legendary: pokemon.pokemon_legendary,
                    descricao: pokemon.descricao,
                    hp: pokemon.hp,
                    ataque: pokemon.ataque,
                    defesa: pokemon.defesa,
                    ataque_especial: pokemon.ataque_especial,
                    defesa_especial: pokemon.defesa_especial,
                    xp: pokemon.xp,
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

exports.getUmLegendary = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM legendary WHERE id_legendary = ?'

        const result = await mysql.execute(query, [req.params.id_legendary])

        const response = {
            mensagem: 'legendary selecionado com sucesso',
            pokemon: {
                id_legendary: result[0].id_legendary,
                pokemon_legendary: result[0].pokemon_legendary,

                descricao: result[0].descricao,
                hp: result[0].hp,
                ataque: result[0].ataque,
                defesa: result[0].defesa,
                ataque_especial: result[0].ataque_especial,
                defesa_especial: result[0].defesa_especial,
                xp: result[0].xp,
                imagem_pokemon: result[0].imagem_pokemon,
                animacao: result[0].animacao,


            }
        }
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getNivel = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM legendary WHERE nivel = ?'

        const result = await mysql.execute(query, [req.params.nivel])

        const response = {
            mensagem: 'legendary selecionado com  nivel sucesso',
            pokemon: result.map( poke => {
                return{
                id_legendary: poke.id_legendary,
                pokemon_legendary: poke.pokemon_legendary,

                descricao: poke.descricao,
                hp: poke.hp,
                ataque: poke.ataque,
                defesa: poke.defesa,
                ataque_especial: poke.ataque_especial,
                defesa_especial: poke.defesa_especial,
                xp: poke.xp,
                imagem_pokemon: poke.imagem_pokemon,
                animacao: poke.animacao,
                nivel: poke.nivel
            }

        })

        }
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}