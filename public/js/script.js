class Pokedex {
    constructor() {
        this.arrayPokedex = [];
        this.editId = null
    }
    async listapokedex() {

        fetch('localhost:8000/pokedex', {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(result => {
            return result.json();
        }).then(data => {
            data.cadastrado.forEach(prd => {
                this.arraypokedex.push(prd);
            });
            for (let i = 0; i < this.arraypokedex.length; i++) {

                let buttonaccodeon = document.createElement('button');
                buttonaccodeon.classList.add("accordion");
                buttonaccodeon.addEventListener("click", function () {

                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;

                    if (panel.style.display === "block") {
                        panel.style.display = "none";
                    } else {
                        panel.style.display = "block";
                    }

                });
                document.getElementsByClassName("coluna")[0].appendChild(buttonaccodeon);
                buttonaccodeon.innerHTML = `<img class="botaoaccordion" src="../img/arrow-card-dash-down.svg"> <span id="denuncia_numero">CURRICULO Nº </span> <span id="denuncia_numero">${this.arraypokedex[i].id_pokedex}</span> 
                <span id="texto-denuncia-2">DATA: </span> <span id="data_denun">${this.arraypokedex[i].data_curriculo}</span>`

                document.getElementsByClassName("coluna")[0].appendChild(buttonaccodeon);

                let divpanel = document.createElement('div');
                divpanel.classList.add("panel");


                divpanel.innerHTML = `<div class="row-1">
                                       <div class="col-6"> 
                                       <p id="descricao_denuncia">${this.arraypokedex[i].conte_mais}</p>
                                       </div>
                                       <div class="col-6 alinhar-denuncia">
                                       <img class="icon-1" onclick="pokedex.visualizar(${this.arraypokedex[i].id_pokedex})" src="../img/eye.png">
                                       <img class="icon-2" onclick="pokedex.excluir(${this.arraypokedex[i].id_pokedex})" src="../img/excluir.png">
                                       </div>
                                       </div>`

                document.getElementsByClassName("coluna")[0].appendChild(divpanel);

            }
        });

    }
    data() {
        let dada = new Date()
        document.getElementById("data_curriculo").value = dada.toString()
        document.getElementById("data_curriculo").value
        this.lerDados
    }

    async adicionar(pokedex) {

        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');

        formData.append('conte_mais', pokedex.conte_mais);
        formData.append('data_curriculo', pokedex.data_curriculo);
        formData.append('arquivo', fileField.files[0]);

        fetch('/pokedex', {
            method: 'POST',
            body: formData,

        }).then(result => {
            return result.json();
        }).then(data => {

            pokedex.conte_mais = data.cadastrado.conte_mais;
            pokedex.arquivo = data.cadastrado.arquivo;
            pokedex.data_curriculo = data.cadastrado.data_curriculo;

            this.arraypokedex.push(pokedex);

        });
    }

    validaCampos(pokedex) {
        let msg = '';

        if (pokedex.conte_mais == "") {
            msg += '- Informe o nome do Produto'
        }
        if (pokedex.arquivo == "") {
            msg += '- Informe o preco do Produto'
        }
        if (msg != '') {
            alert(msg);
            return false
        }
        return true;

    }
    async visualizar(id_pokedex) {
        fetch('/pokedex/' + id_pokedex)
            .then(result => {
                return result.json()
            }).then(data => {
                for (let i = 0; i < this.arraypokedex.length; i++) {
                    if (this.arraypokedex[i].id_pokedex == id_pokedex) {
                        window.location.assign("pokedex/" + data.cadastrado.arquivo)

                    }
                }
            });

    }
    async excluir(id_pokedex){
        if (confirm('Deseja realmente deletar o Curriculo N ' + id_pokedex)) {
            fetch('/pokedex/' + id_pokedex, {
                method: 'DELETE'
            }).then(result => {
                return result.json();
            }).then(data => {

                for (let i = 0; i < this.arraypokedex.length; i++) {
                    if (this.arraypokedex[i].id_pokedex == id_pokedex) {
                        this.arraypokedex.splice(this.arraypokedex, 1);
                        document.location.reload(true);
                    }
                }
            })
        }
    }
}

var pokedex = new Pokedex