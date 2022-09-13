const mysql = require('../mysql');

exports.postPokemon = async(req, res, next) => {
    try {
        const queryTipo_pokemon = 'SELECT * FROM tipo_pokemon WHERE tipo_pokemon = ?';
        const resultTipo_pokemon = await mysql.execute(queryTipo_pokemon, [req.body.tipo_pokemon]);

        if(resultTipo_pokemon.length == 0){
            return res.status(404).send({ message: 'Tipo do pokemon não encontrado'})
        }
        const queryPokemon = `INSERT INTO pokemon (nome_pokemon, ataque_pokemon, experiencia, tipo_pokemon, color, 
                              imagem_pokemon,defesa,ataque,ataque_especial,defesa_especial,numero_pokemon,geracao,hp) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        const resultPokemon = await mysql.execute(queryPokemon, [
            req.body.nome_pokemon, 
            req.body.ataque_pokemon, 
            req.body.experiencia, 
            req.body.tipo_pokemon, 
            req.body.color, 
            req.file.path.replace("public", ""),
            req.body.defesa,
            req.body.ataque,
            req.body.ataque_especial,
            req.body.defesa_especial,
            req.body.numero_pokemon,
            req.body.geracao,
            req.body.hp
        ])

        const response = {
            mensagem: 'Pokemon inserido com sucesso',
            pokemonCriado: {
                id_pokemon: resultPokemon.id_pokemon,
                nome_pokemon: req.body.nome_pokemon,
                ataque_pokemon: req.body.ataque_pokemon,
                experiencia: req.body.experiencia,
                id_tipo_pokemon: req.body.tipo_pokemon,
                color: req.body.color
            }
        }
        return res.status(201).send(response);
    } catch (error) {
       
        return res.status(500).send({error: error})
    }
}
