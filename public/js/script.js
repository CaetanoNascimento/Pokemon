
class Pokedex {
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
            for (let i = 0; i < pokemon.length; i++) {

                let esquerdona = document.getElementById('esquerda')
                let esquerda = document.createElement('div')
                esquerda.classList.add('esquerda')

                esquerda.innerHTML = `
                    <div class="row-1">
                        <div class="col-12 boxpoke">
                        <div class="row-1">
                        <div class="col-4">
                            <div class="row-1">
                                <div class="col-12">
                                    <span id="nomedopokemon">${data.pokemon[i].nome_pokemon}</span>
                                </div>
                            </div>
                            <div class="row-1">
                                <div class="col-6 circulo">
                                    <span id="numerodopoder">${data.pokemon[i].ataque}</span>
                                </div>
                                <div class="col-6 circulo circulo2">
                                    <span id="numerodopoder">${data.pokemon[i].defesa}</span>
                                </div>
                            </div>
                            <div class="row-1">
                                <div class="col-6">
                                    <span id="span">Ataque</span>
                                </div>
                                <div class="col-6">
                                    <span id="span">Defesa</span>
                                </div>
                            </div>
                            <div class="row-1">
                                <div class="col-12">
                                    <span class="tipo_pokemon" style="background:var(--${data.pokemon[i].color});"> ${data.pokemon[i].tipo_pokemon} </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-8 ">
                        <div row-1>
                        <div col-12 color style="background:var(--${data.pokemon[i].color});border-radius: 8px;text-align: center">
                            <img src='${data.pokemon[i].imagem_pokemon}'onclick="pokedex.visualizarPokemon(${data.pokemon[i].id_pokemon});document.getElementById('id01').style.display='flex'" id="imagem_pokemon">
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>`
                esquerdona.appendChild(esquerda);
                var o = i++; o++
                let centrao = document.getElementById('centro')
                let centro = document.createElement('div')
                centro.classList.add('centro')
                centro.innerHTML = `
                        <div class="row-1">
                            <div class="col-12 boxpoke">
                            <div class="row-1">
                            <div class="col-4">
                                <div class="row-1">
                                    <div class="col-12">
                                        <span id="nomedopokemon">${data.pokemon[o].nome_pokemon}</span>
                                    </div>
                                </div>
                                <div class="row-1">
                                    <div class="col-6 circulo">
                                        <span id="numerodopoder">${data.pokemon[o].ataque}</span>
                                    </div>
                                    <div class="col-6 circulo circulo2">
                                        <span id="numerodopoder">${data.pokemon[o].defesa}</span>
                                    </div>
                                </div>
                                <div class="row-1">
                                    <div class="col-6">
                                        <span id="span">Ataque</span>
                                    </div>
                                    <div class="col-6">
                                        <span id="span">Defesa</span>
                                    </div>
                                </div>
                                <div class="row-1">
                                    <div class="col-12">
                                        <span class="tipo_pokemon" style="background:var(--${data.pokemon[o].color});"> ${data.pokemon[o].tipo_pokemon} </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-8 ">
                            <div row-1>
                            <div col-12 color style="background:var(--${data.pokemon[o].color});border-radius: 8px;text-align: center">
                                <img src='${data.pokemon[o].imagem_pokemon}'onclick="pokedex.visualizarPokemon(${data.pokemon[o].id_pokemon});document.getElementById('id01').style.display='flex'" id="imagem_pokemon">
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>
                            `
                centrao.appendChild(centro);
                console.log(o)
                var u = o++;; u++
                console.log(u)
                let direitona = document.getElementById('direita')
                let direita = document.createElement('div')
                direita.classList.add('direita')
                direita.innerHTML = `
                                    <div class="row-1">
                                        <div class="col-12 boxpoke">
                                        <div class="row-1">
                                        <div class="col-4">
                                            <div class="row-1">
                                                <div class="col-12">
                                                    <span id="nomedopokemon">${data.pokemon[u].nome_pokemon}</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-6 circulo">
                                                    <span id="numerodopoder">${data.pokemon[u].ataque}</span>
                                                </div>
                                                <div class="col-6 circulo circulo2">
                                                    <span id="numerodopoder">${data.pokemon[u].defesa}</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-6">
                                                    <span id="span">Ataque</span>
                                                </div>
                                                <div class="col-6">
                                                    <span id="span">Defesa</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-12">
                                                    <span class="tipo_pokemon" style="background:var(--${data.pokemon[u].color});"> ${data.pokemon[u].tipo_pokemon} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-8 ">
                                        <div row-1>
                                        <div col-12 color style="background:var(--${data.pokemon[u].color});border-radius: 8px;text-align: center">
                                            <img src='${data.pokemon[u].imagem_pokemon}'onclick="pokedex.visualizarPokemon(${data.pokemon[u].id_pokemon});document.getElementById('id01').style.display='flex'" id="imagem_pokemon">
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                        `
                direitona.appendChild(direita);

                i = u

                console.log(o)

                //buttonaccodeon.innerHTML  document.createElement  classList.add addEventListener
            }
        });

    }

    async visualizarPokemon(id_pokemon) {
        fetch('http://localhost:8000/pokedexx/' + id_pokemon)
            .then(result => {
                return result.json()
            }).then(data => {
                for (let i = 0; i < pokemon.length; i++) {
                    if (data.pokemon.id_pokemon == id_pokemon) {
                        let modal = document.getElementById('id01')
                        modal.innerHTML = `    <div class="row-1 ">
                        <div class="col-12 modal">
                            <div class="row-1">
                                <div class="col-5 visual" color style="background:var(--${data.pokemon.color + 'gradient'});border-radius: 8px;text-align: center">
                                    <div class="row-1">
                                        <img src="../img/x.png" id="x"
                                            onclick="document.getElementById('id01').style.display='none'">
                                    </div>
                                    <img src="${data.pokemon.imagem_pokemon}" id="modal_imagem">
                                </div>
                                <div class="col-7 visual2" color style="background:var(--${data.pokemon.color + 'gradient'});border-radius: 8px;">
                                    <div class="row-1">
                                        <div class="col-6 nomedopokemon2">
                                            <span id="nomedopokemon2">${data.pokemon.nome_pokemon}</span>
                                        </div>
                                        <div class="col-4 geracao">
                                            <span id="geracao">Geração ${data.pokemon.geracao}</span>
                                        </div>
                                        <div class="col-2 circulozinho">
                                            <span id="numerodeidentificacao">${data.pokemon.numero_pokemon}</span>
                                        </div>
                                    </div>
                                    <div class="row-1">
                                        <div class="col-7 abilites">
                                            <p id="abilites">Habilidade</p>
                                            <p id="abilites">${data.pokemon.ataque_pokemon}</p>
                                        </div>
                                    </div>
                                    <div class="row-1">
                                        <div class="col-11 atributos">
                                            <div class="row-1">
                                                <div class="col-6">
                                                    <p id="atributos">HP</p>
                                                    <p id="atributos2">${data.pokemon.hp}</p>
                                                </div>
                                                <div class="col-6">
                                                    <p id="atributos">Experiencia</p>
                                                    <p id="atributos2">${data.pokemon.experiencia}</p>
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
                                                    <span id="numerodopoder">${data.pokemon.defesa}</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-6">
                                                    <span id="power">Defesa</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2 status2">
                                            <div class="row-1">
                                                <div class="col-6 circulo">
                                                    <span id="numerodopoder">${data.pokemon.ataque}</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-6">
                                                    <span id="power">Ataque</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2 status3">
                                            <div class="row-1">
                                                <div class="col-6 circulo">
                                                    <span id="numerodopoder">${data.pokemon.ataque_especial}</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-6">
                                                    <span id="power">SpAtaque</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-2 status4">
                                            <div class="row-1">
                                                <div class="col-6 circulo">
                                                    <span id="numerodopoder">${data.pokemon.defesa_especial}</span>
                                                </div>
                                            </div>
                                            <div class="row-1">
                                                <div class="col-6">
                                                    <span id="power">SpDefesa</span>
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

class Legendary {

    carregar_lendarios(nivel) {
        fetch('http://localhost:8000/legendary/pokemon/' + nivel, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(result => {
            return result.json()
        }).then(data => {
            console.log('entrei')
            console.log(data)
            for (let i = 0; i < data.pokemon.length; i++) {
                let pokemon = document.getElementById('content')
                let lendario = document.createElement('div')
                lendario.classList.add('col-1')
                lendario.classList.add('pokelist')
                lendario.classList.add('show-on-scroll')
                lendario.classList.add('inline-photo')
                lendario.innerHTML = `
                <img onclick="legendary.selecionar_lendario(${data.pokemon[i].id_legendary})" class="pokemonlist " 
                onmouseover="legendary.animar_lendas(${data.pokemon[i].id_legendary})" 
                onmouseout="legendary.desanimar_lendas(${data.pokemon[i].id_legendary})"src="${data.pokemon[i].imagem_pokemon}" id="pokemonlist${data.pokemon[i].id_legendary}">
                <div class="row-1">
                    <div class="col-12 pokebolabarra">
                        <div class="row-1">
                            <div class="col-6 nomepokemonlist">
                                <span>${data.pokemon[i].pokemon_legendary}</span>
                            </div>
                            <div class="col-6 pokebola">
                                <img src="../img/pokebola.png">
                            </div>
                        </div>
                    </div>
                </div>`
                pokemon.appendChild(lendario);
            }

        })

        const gap = 16;

        const carousel = document.getElementById("carousel"),
            content = document.getElementById("content"),
            next = document.getElementById("next"),
            prev = document.getElementById("prev");

        console.log(content)

        next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
                if (content.classList.contains('transicao2')) {
                    content.classList.remove('transicao2')

                    console.log(carousel.classList.contains('transicao'))
                }
                carousel.classList.add('transicao')

            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
        });
        prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
                if (carousel.classList.contains('transicao')) {
                    carousel.classList.remove('transicao')

                    console.log(carousel.classList.contains('transicao'))
                }
                content.classList.add('transicao2')
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        });

        let width = carousel.offsetWidth;
        window.addEventListener("resize", e => (width = carousel.offsetWidth));

    }
    carregar_lendarios_fracos(nivel) {
        fetch('http://localhost:8000/legendary/pokemon/' + nivel, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(result => {
            return result.json()
        }).then(data => {
            console.log('entrei')
            console.log(data)
            for (let i = 0; i < data.pokemon.length; i++) {
                let pokemon_weaker = document.getElementById('weaker')
                let lendario = document.createElement('div')
                lendario.classList.add('col-1')
                lendario.classList.add('pokelist')
                lendario.classList.add('show-on-scroll')
                lendario.classList.add('inline-photo')
                lendario.innerHTML = `
                <img onclick="legendary.selecionar_lendario(${data.pokemon[i].id_legendary})" 
                class="pokemonlist " onmouseover="legendary.animar_lendas(${data.pokemon[i].id_legendary})"
                 onmouseout="legendary.desanimar_lendas(${data.pokemon[i].id_legendary})"src="${data.pokemon[i].imagem_pokemon}" id="pokemonlist${data.pokemon[i].id_legendary}">
                <div class="row-1">
                    <div class="col-12 pokebolabarra">
                        <div class="row-1">
                            <div class="col-6 nomepokemonlist">
                                <span>${data.pokemon[i].pokemon_legendary}</span>
                            </div>
                            <div class="col-6 pokebola">
                                <img src="../img/pokebola.png">
                            </div>
                        </div>
                    </div>
                </div>`
                pokemon_weaker.appendChild(lendario);
            }

        })

        const gap = 16;

        const carousel = document.getElementById("carousel_weaker"),
            content = document.getElementById("weaker"),
            next = document.getElementById("next_weaker"),
            prev = document.getElementById("prev_weaker");

        console.log(content)

        next.addEventListener("click", e => {
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
                if (content.classList.contains('transicao2')) {
                    content.classList.remove('transicao2')

                    console.log(carousel.classList.contains('transicao'))
                }
                carousel.classList.add('transicao')

            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
        });
        prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
                if (carousel.classList.contains('transicao')) {
                    carousel.classList.remove('transicao')

                    console.log(carousel.classList.contains('transicao'))
                }
                content.classList.add('transicao2')
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        });

        let width = carousel.offsetWidth;
        window.addEventListener("resize", e => (width = carousel.offsetWidth));
    }

    carregar_lendarios_fortes(nivel) {
        fetch('http://localhost:8000/legendary/pokemon/' + nivel, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(result => {
            return result.json()
        }).then(data => {
            console.log('entrei')
            console.log(data)
            for (let i = 0; i < data.pokemon.length; i++) {
                let pokemon_weaker = document.getElementById('stronger')
                let lendario = document.createElement('div')
                lendario.classList.add('col-1')
                lendario.classList.add('pokelist')
                lendario.classList.add('show-on-scroll')
                lendario.classList.add('inline-photo')
                lendario.innerHTML = `
                <img onclick="legendary.selecionar_lendario(${data.pokemon[i].id_legendary})" 
                class="pokemonlist " onmouseover="legendary.animar_lendas(${data.pokemon[i].id_legendary})"
                 onmouseout="legendary.desanimar_lendas(${data.pokemon[i].id_legendary})"src="${data.pokemon[i].imagem_pokemon}" id="pokemonlist${data.pokemon[i].id_legendary}">
                <div class="row-1">
                    <div class="col-12 pokebolabarra">
                        <div class="row-1">
                            <div class="col-6 nomepokemonlist">
                                <span>${data.pokemon[i].pokemon_legendary}</span>
                            </div>
                            <div class="col-6 pokebola">
                                <img src="../img/pokebola.png">
                            </div>
                        </div>
                    </div>
                </div>`
                pokemon_weaker.appendChild(lendario);
            }

        })

        const gap = 16;

        const carousel = document.getElementById("carousel_stronger"),
            content = document.getElementById("stronger"),
            next = document.getElementById("next_stronger"),
            prev = document.getElementById("prev_stronger");

        next.addEventListener("click", e => {
            console.log("passei")
            carousel.scrollBy(width + gap, 0);
            if (carousel.scrollWidth !== 0) {
                prev.style.display = "flex";
                if (content.classList.contains('transicao2')) {
                    content.classList.remove('transicao2')

                    console.log(carousel.classList.contains('transicao'))
                }
                carousel.classList.add('transicao')

            }
            if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "none";
            }
        });
        prev.addEventListener("click", e => {
            carousel.scrollBy(-(width + gap), 0);
            if (carousel.scrollLeft - width - gap <= 0) {
                prev.style.display = "none";
                if (carousel.classList.contains('transicao')) {
                    carousel.classList.remove('transicao')

                    console.log(carousel.classList.contains('transicao'))
                }
                content.classList.add('transicao2')
            }
            if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
                next.style.display = "flex";
            }
        });

        let width = carousel.offsetWidth;
        window.addEventListener("resize", e => (width = carousel.offsetWidth));
    }


    selecionar_lendario(id_legendary) {
        fetch('http://localhost:8000/legendary/' + id_legendary)
            .then(result => {
                return result.json()
            }).then(data => {
                let lenda = document.getElementById('lenda')
                lenda.innerHTML = `<div class="row-1">
                <div class="col-6">
                    <img src="${data.pokemon.imagem_pokemon}" id="legendary_escolhido">
                </div>
                <div class="col-6">
                    <div class="row-1">
                        <div class="col-12">
                            <span class="titulos ">${data.pokemon.pokemon_legendary}</span>
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="col-12">
                            <p id="descricao">${data.pokemon.descricao}</p>
                        </div>
                    </div>
                    <div class="col-12">
                    
                    <div class="row-1">
                        <div class="col-11 healthypoints">
                            <div class="row-1">
                                <div class="col-6">
                                    <p id="points">HP</p>
                                    <p id="points2">${data.pokemon.hp}</p>
                                </div>
                                <div class="col-6">
                                    <p id="points3">XP</p>
                                    <p id="points4">${data.pokemon.xp}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-1">
                    <div class="col-6">
                    <div class="progress barra_esquerda">
                    <div class="progress__fill" id="progress__fill"></div>
                    <span class="progress__text">0%</span>
                    </div>
                  </div>
                    </div>
                    <div class="row-1">
                    
                        <div class="progress barra_direita" >
                        <div class="progress__fill " id="progress__fill2"></div>
                        <span class="progress__text">0%</span>
                        </div>
                    </div>
                    <div class="row-1">
                        <div class="col-11 healthypoints">
                            <div class="row-1">
                                <div class="col-6">
                                    <p id="points">Ataque</p>
                                    <p id="points2">${data.pokemon.ataque}</p>
                                </div>
                                <div class="col-6">
                                    <p id="points3">Defesa</p>
                                    <p id="points4">${data.pokemon.defesa}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-1">
                    <div class="progress barra_esquerda" >
                    <div class="progress__fill " id="progress__fill3"></div>
                    <span class="progress__text">0%</span>
                    </div>
                    </div>
                    <div class="row-1">
                    <div class="progress barra_direita" >
                    <div class="progress__fill " id="progress__fill4"></div>
                    <span class="progress__text">0%</span>
                    </div>
                    </div>
                    <div class="row-1">
                        <div class="col-11 healthypoints">
                            <div class="row-1">
                                <div class="col-6">
                                    <p id="points">Special Ataque</p>
                                    <p id="points2">${data.pokemon.ataque_especial}</p>
                                </div>
                                <div class="col-6">
                                    <p id="points3">Special Defesa</p>
                                    <p id="points4">${data.pokemon.defesa_especial}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-1">
                    <div class="progress barra_esquerda" >
                    <div class="progress__fill " id="progress__fill5"></div>
                    <span class="progress__text">0%</span>
                    </div>
                    </div>
                    <div class="row-1">
                    <div class="progress barra_direita" >
                    <div class="progress__fill " id="progress__fill6"></div>
                    <span class="progress__text">0%</span>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>`
                console.log(data)

                window.scrollTo({
                    top: 200,
                    left: 0,
                    behavior: 'smooth'
                });
                let progressBar = document.getElementById("progress__fill")
                progressBar.style.width = `${data.pokemon.hp}px`;
                let progressBar2 = document.getElementById("progress__fill2")
                progressBar2.style.width = `${data.pokemon.xp}px`;
                let progressBar3 = document.getElementById("progress__fill3")
                progressBar3.style.width = `${data.pokemon.ataque}px`;
                let progressBar4 = document.getElementById("progress__fill4")
                progressBar4.style.width = `${data.pokemon.defesa}px`;
                let progressBar5 = document.getElementById("progress__fill5")
                progressBar5.style.width = `${data.pokemon.ataque_especial}px`;
                let progressBar6 = document.getElementById("progress__fill6")
                progressBar6.style.width = `${data.pokemon.defesa_especial}px`;
            })


    }

    updateProgressBar(value) {
        /*const progressBar = document.querySelector(".progress");
        value = Math.round(value);
        progressBar.querySelector("progress__fill").style.width = `${value}px`;*/
        let progressBar = document.getElementById("progress__fill")
        progressBar.style.width = `${value}px`;
    }


    animar_lendas(x) {
        fetch('http://localhost:8000/legendary/' + x)
            .then(result => {
                return result.json()
            }).then(data => {
                document.getElementById('pokemonlist' + x).src = data.pokemon.animacao
            })

    }
    desanimar_lendas(x) {
        fetch('http://localhost:8000/legendary/' + x)
            .then(result => {
                return result.json()
            }).then(data => {
                document.getElementById('pokemonlist' + x).src = data.pokemon.imagem_pokemon
            })

    }

}

var legendary = new Legendary

//legendary.carregar_lendarios_fortes(2) 