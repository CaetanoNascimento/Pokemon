const mysql = require('../mysql');
const pdf = require('pdfmake')
const fs = require('fs');
const { response } = require('express');

exports.getPokemon = async (req, res, next) => {
    try {
        const result = await mysql.execute('SELECT * FROM pokemon')
        const response = {
            pokemon: result.map(pokemon => {
                return {
                    id_pokemon: pokemon.id_pokemon,
                    nome_pokemon: pokemon.nome_pokemon,
                    ataque_pokemon: pokemon.ataque_pokemon,
                    experiencia: pokemon.experiencia,
                    tipo_pokemon: pokemon.tipo_pokemon,
                    color: pokemon.color,
                    imagem_pokemon: pokemon.imagem_pokemon,
                    defesa: pokemon.defesa,
                    ataque: pokemon.ataque,
                    ataque_especial: pokemon.ataque_especial,
                    defesa_especial: pokemon.defesa_especial,
                    numero_pokemon: pokemon.numero_pokemon,
                    geracao: pokemon.geracao,
                    hp: pokemon.hp
                }
            })
        }
        return res.status(200).send(response);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ error: error })
    }
}

exports.getUmPokemon = async (req, res, next) => {
    try {
        const query = 'SELECT * FROM pokemon WHERE id_pokemon = ?'

        const result = await mysql.execute(query, [req.params.id_pokemon])

        const response = {
            mensagem: 'pokemon selecionado com sucesso',
            pokemon: {
                id_pokemon: result[0].id_pokemon,
                nome_pokemon: result[0].nome_pokemon,
                ataque_pokemon: result[0].ataque_pokemon,
                experiencia: result[0].experiencia,
                tipo_pokemon: result[0].tipo_pokemon,
                color: result[0].color,
                imagem_pokemon: result[0].imagem_pokemon,
                defesa: result[0].defesa,
                ataque: result[0].ataque,
                ataque_especial: result[0].ataque_especial,
                defesa_especial: result[0].defesa_especial,
                numero_pokemon: result[0].numero_pokemon,
                geracao: result[0].geracao,
                hp: result[0].hp

            }
        }
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.getPdf = async (req, res, next) => {
    try {
        const fonts = {
            Helvetica: {
                normal: "Heltica",
                bold: "Helvetica-Bold",
                italics: "Helvetica-Oblique",
                bolditalics: "Helvetica-BoldOblique",
            },
        };
        const printer = new pdf(fonts)

        const docDefinitions = {
            defaultStyle: { font: "Helvetica" },
            content: [
                { text: "Meu primeiro pokemon" }
            ],
        };

        const pdfDoc = printer.createPdfKitDocument(docDefinitions);
        pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
        pdfDoc.end();
        console.log('opa')

        response.send('relatorio')

    } catch (error) {

    }
}