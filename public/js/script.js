class Pokedex {
    constructor() {
        this.arrayPokedex = [];
        this.editId = null
    }
    async pokedex() {

        fetch('http://localhost:8000/pokedexx', {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(result => {
            return result.json();
        }).then(data => {
            console.log(data.pokemon)
            console.log(data)
            data.pokemon.forEach(poke => {
                this.arrayPokedex.push(poke);
            });
            for (let i = 0; i < this.arrayPokedex.length; i++) {

                let pokedex = document.createElement('div')
                pokedex.classList.add('esquerda')
                console.log(pokedex.classList.contains('centro'))
                document.getElementsByClassName("principalpokedex")[0].appendChild(pokedex)
                if (true == pokedex.classList.contains('esquerda')) {
                    pokedex.classList.add('centro')
                    console.log(pokedex.classList.contains('centro'))
                    console.log("voltei")
                }
                pokedex.innerHTML = `<div class="row-1 boxpoke">
                <div class="col-4">
                    <div class="row-1">
                        <div class="col-12">
                            <span id="nomedopokemon">${this.arrayPokedex[i].nome_pokemon}</span>
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="col-6 circulo">
                            <span id="numerodopoder">149</span>
                        </div>
                        <div class="col-6 circulo circulo2">
                            <span id="numerodopoder">49</span>
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="col-6">
                            <span id="span">Attack</span>
                        </div>
                        <div class="col-6">
                            <span id="span">Defense</span>
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="col-12">
                            <span class="tipo_pokemon" style="background-color:var(--${this.arrayPokedex[i].color});"> ${this.arrayPokedex[i].tipo_pokemon} </span>
                        </div>
                    </div>
                </div>
                <div class="col-8 ">
                <div row-1>
                <div col-12 color style="background-color:var(--${this.arrayPokedex[i].color});">
                    <img src='${this.arrayPokedex[i].imagem_pokemon}'onclick="pokedex.visualizarPokemon().style.display='flex'" id="imagem_pokemon">
                    </div>
                    </div>
                </div>`

                console.log(pokedex)
                //buttonaccodeon.innerHTML  document.createElement  classList.add addEventListener
            }
        });

    }

    async visualizarPokemon(id_pokemon) {
        fetch('http://localhost:8000/pokedexx/' + id_pokemon)
            .then(result => {
                return result.json()
            }).then(data => {
                for (let i = 0; i < this.arraPokedex.length; i++) {
                    if (this.arrayPokedex[i].id_pokemon == id_pokemon) {

                        let pokemon = document.createElement('div')
                        document.getElementsByClassName("principalpokedex")[0].appendChild(pokemon)

                        pokemon.innerHTML = `  <div class="principalmodal" id="id01">
                                                <div class="row-1 ">
                                                 <div class="col-12 modal">
                                                <div class="row-1">
            <div class="col-5 charizard charizard3">
                <div class="row-1">
                    <img src="../img/x.png" id="x"
                        onclick="document.getElementById('id01').style.display='none'">
                </div>
                <img src="../img/charizard2.png">
            </div>
            <div class="col-7 charizard2">
                <div class="row-1">
                    <div class="col-6 nomedopokemon2">
                        <span id="nomedopokemon2">Charizard</span>
                    </div>
                    <div class="col-4 geracao">
                        <span id="geracao">Generetion 1</span>
                    </div>
                    <div class="col-2 circulozinho">
                        <span id="numerodeidentificacao">578</span>
                    </div>
                </div>
                <div class="row-1">
                    <div class="col-7 abilites">
                        <p id="abilites">Abilities</p>
                        <p id="abilites">Overgrow - Chlorophyll</p>
                    </div>
                </div>
                <div class="row-1">
                    <div class="col-11 atributos">
                        <div class="row-1">
                            <div class="col-6">
                                <p id="atributos">Healthy Points</p>
                                <p id="atributos2">1 000 000</p>
                            </div>
                            <div class="col-6">
                                <p id="atributos">Experience</p>
                                <p id="atributos2">1 000 000</p>
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="col-3 barra">
                            </div>
                            <div class="col-3 barra2">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row-1">
                    <div class="col-2 status">
                        <div class="row-1">
                            <div class="col-6 circulo">
                                <span id="numerodopoder">49</span>
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="col-6">
                                <span id="power">Defense</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 status2">
                        <div class="row-1">
                            <div class="col-6 circulo">
                                <span id="numerodopoder">165</span>
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="col-6">
                                <span id="power">Attack</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 status3">
                        <div class="row-1">
                            <div class="col-6 circulo">
                                <span id="numerodopoder">130</span>
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="col-6">
                                <span id="power">SpAttack</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2 status4">
                        <div class="row-1">
                            <div class="col-6 circulo">
                                <span id="numerodopoder">271</span>
                            </div>
                        </div>
                        <div class="row-1">
                            <div class="col-6">
                                <span id="power">SpAttack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`


                    }
                }
            });
    }
}

var pokedex = new Pokedex