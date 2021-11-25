const mysql = require('../mysql');

/*exports.getPedidos = async(req, res, next) => {
    try {
        const query = 
        `SELECT pedidos.id_pedidos,
        pedidos.quantidade,
        produtos.id_produtos,
        produtos.nome,
        produtos.preco
        FROM pedidos
        INNER JOIN produtos
        ON produtos.id_produtos = pedidos.id_produtos;`
        const result = await mysql.execute(query);
        const response = {
            quantidade: result.length,
            pedidos: result.map(pedi => {
                return {
                    id_pedidos: pedi.id_pedidos,
                    quantidade: pedi.quantidade,
                    produtos: {
                        id_produtos: pedi.id_produtos,
                        nome: pedi.nome,
                        preco: pedi.preco
                    },
                    request: {
                        tipo: 'GET',
                        descricao: 'Retorna todos os pedidos',
                        url: process.env.URL_API + 'pedidos/' + pedi.id_pedidos
                    }
                }
            })
        }
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({error: error})
    }
}
*/
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

/*exports.getUmPedido = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM pedidos WHERE id_pedidos = ?'
        const result = await mysql.execute(query, [req.params.id_pedidos])

        if (result.length == 0) {
            return res.status(404).send({
                message: 'Não foi encontrado pedido com este ID'
            })
        }
        const response = {
            mensagem: 'Produto inserido com sucesso',
            pedidos: {
                id_pedidos: result[0].id_pedidos,
                id_produtos: result[0].id_produtos,
                quantidade: result[0].quantidade,
                request: {
                    tipo: 'GET',
                    descricao: 'Retorna um pedido',
                    url: process.env.URL_API + 'pedidos'
                }
            }
        }
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({error: error})
    }
}

exports.deletePedidos = async(req, res, next) => {
    try {
        const query = "DELETE FROM pedidos WHERE id_pedidos = ?";
        await mysql.execute(query, [req.params.id_pedidos]);

        const response = {
            mensagem: 'Pedido removido com sucesso',
            request: {
                tipo: 'POST',
                descricao: 'Insere um pedido',
                url: process.env.URL_API + 'pedidos',
                body: {
                    id_produtos: 'Number',
                    quantidade: 'Number'
                }
            }
        }
        res.status(202).send(response)
        
    } catch (error) {
        return res.status(500).send({error: error})
    }
}*/