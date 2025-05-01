let animais = [
    { id: 1, nome: "Coelho torto", pedigree: 123, telefone: 21321321312312 },
    { id: 2, nome: "Cobra lisa", pedigree: 124, telefone: 312321321321 },
    { id: 3, nome: "Gato veloz", pedigree: 125, telefone: 998877665544 },
    { id: 4, nome: "Cão bravo", pedigree: 126, telefone: 887766554433 },
    { id: 5, nome: "Papagaio falante", pedigree: 127, telefone: 776655443322 },
    { id: 6, nome: "Tartaruga ninja", pedigree: 128, telefone: 665544332211 },
    { id: 7, nome: "Jacaré manhoso", pedigree: 129, telefone: 554433221100 },
    { id: 8, nome: "Cavalo ligeiro", pedigree: 130, telefone: 443322110099 },
    { id: 9, nome: "Rato esperto", pedigree: 131, telefone: 332211009988 },
    { id: 10, nome: "Urso dorminhoco", pedigree: 132, telefone: 221100998877 },
    { id: 11, nome: "Macaco travesso", pedigree: 133, telefone: 110099887766 },
    { id: 12, nome: "Lobo cinzento", pedigree: 134, telefone: 109988776655 },
    { id: 13, nome: "Leão valente", pedigree: 135, telefone: 988877665544 },
    { id: 14, nome: "Tigre feroz", pedigree: 136, telefone: 877766554433 },
    { id: 15, nome: "Pantera negra", pedigree: 137, telefone: 766655443322 },
    { id: 16, nome: "Onça pintada", pedigree: 138, telefone: 655544332211 },
    { id: 17, nome: "Coruja sábia", pedigree: 139, telefone: 544433221100 },
    { id: 18, nome: "Pato engraçado", pedigree: 140, telefone: 433322110099 },
    { id: 19, nome: "Galo cantador", pedigree: 141, telefone: 322110099988 },
    { id: 20, nome: "Galinha choca", pedigree: 142, telefone: 211009988877 },
    { id: 21, nome: "Pombo urbano", pedigree: 143, telefone: 100998877766 },
    { id: 22, nome: "Ganso gigante", pedigree: 144, telefone: 998877665533 },
    { id: 23, nome: "Avestruz veloz", pedigree: 145, telefone: 887766554411 },
    { id: 24, nome: "Cervo ágil", pedigree: 146, telefone: 776655443399 },
    { id: 25, nome: "Anta tranquila", pedigree: 147, telefone: 665544332288 },
    { id: 26, nome: "Tamanduá curioso", pedigree: 148, telefone: 554433221177 },
    { id: 27, nome: "Bicho-preguiça", pedigree: 149, telefone: 443322110066 },
    { id: 28, nome: "Canguru saltador", pedigree: 150, telefone: 332211009955 },
    { id: 29, nome: "Hipopótamo gordo", pedigree: 151, telefone: 221100998844 },
    { id: 30, nome: "Elefante gigante", pedigree: 152, telefone: 110099887733 },
    { id: 31, nome: "Camelo resistente", pedigree: 153, telefone: 998877665522 },
    { id: 32, nome: "Lêmure ágil", pedigree: 154, telefone: 887766554411 },
    { id: 33, nome: "Rena natalina", pedigree: 155, telefone: 776655443300 },
    { id: 34, nome: "Foca brincalhona", pedigree: 156, telefone: 665544332211 },
    { id: 35, nome: "Lontra alegre", pedigree: 157, telefone: 554433221100 },
    { id: 36, nome: "Urso polar", pedigree: 158, telefone: 443322110099 },
    { id: 37, nome: "Pinguim elegante", pedigree: 159, telefone: 332211009988 },
    { id: 38, nome: "Orca veloz", pedigree: 160, telefone: 221100998877 },
    { id: 39, nome: "Golfinho brincalhão", pedigree: 161, telefone: 110099887766 },
    { id: 40, nome: "Tubarão branco", pedigree: 162, telefone: 998877665544 },
    { id: 41, nome: "Polvo esperto", pedigree: 163, telefone: 887766554433 },
    { id: 42, nome: "Camarão saltitante", pedigree: 164, telefone: 776655443322 },
    { id: 43, nome: "Estrela-do-mar", pedigree: 165, telefone: 665544332211 },
    { id: 44, nome: "Cavalo-marinho", pedigree: 166, telefone: 554433221100 },
    { id: 45, nome: "Peixe-palhaço", pedigree: 167, telefone: 443322110099 },
    { id: 46, nome: "Raia venenosa", pedigree: 168, telefone: 332211009988 },
    { id: 47, nome: "Águia real", pedigree: 169, telefone: 221100998877 },
    { id: 48, nome: "Corvo astuto", pedigree: 170, telefone: 110099887766 },
    { id: 49, nome: "Falcão veloz", pedigree: 171, telefone: 998877665544 },
    { id: 50, nome: "Lhama curiosa", pedigree: 172, telefone: 887766554433 }
];

let estaAdicionando = true
let idAnimalAlterado = null

function getProximoId(){
    //se nao há nenhum animal no vetor, devolve o ID = 1
    if (animais.length == 0){
        return 1
    }else{
        //pegar o último animal do vetor
        //pegar o id do último animal do vetor
        //somar + 1
        let ultimaPosicaoVetor = animais.length - 1
        let ultimoAnimal = animais[ultimaPosicaoVetor]
        let idUltimoAnimal = ultimoAnimal.id
        return idUltimoAnimal + 1
    }
}

function validarDados(nome, telefone, pedigree){
    let valido = true
    if (nome.indexOf(" ") == -1){ //verifica se tem espaço
        document.getElementById("erro-nome").style.display = "block"
        valido = false
    }
    if (pedigree == ""){
        document.getElementById("erro-pedigree").style.display = "block"
        valido = false
    }
    if (telefone.length < 11){
        document.getElementById("erro-telefone").style.display = "block"
        valido = false
    }
    return valido
}

function exibirMensagem(texto){
    document.getElementById("mensagem").style.display = "flex"
    setTimeout(function(){
        document.getElementById("mensagem").style.display = "none"
    }, 2000)
}

function salvar(){

    let pedigree = document.getElementById("pedigree").value.trim()
    let nome = document.getElementById("nome").value.trim()
    let telefone = document.getElementById("telefone").value.trim()

    if (!validarDados(nome, telefone, pedigree)){
        return false
    }

    if (estaAdicionando){ //(idAnimalAlterado == null)
        let id = getProximoId()

        let animal = {
            "id": id,
            "pedigree": pedigree,
            "nome": nome,
            "telefone": telefone
        }

        animais.push(animal) //adiciona o animal na lista de animais

        exibirMensagem("Cadastrado com sucesso")
    }else{ //está alterando
        //busca o animal para ser atualizado
        for(let contador = 0; contador <= animais.length - 1; contador++){
            let animal = animais[contador]
            if (animal.id == idAnimalAlterado){
                //ao encontrar o animal pelo ID, atualiza as informações dele
                animal.nome = nome
                animal.pedigree = pedigree
                animal.telefone = telefone
            }
        }
        exibirMensagem("Alterado com sucesso")
    }            

    ocultarFormulario()
    limparForm()
    focarCaixaPedigree()
    estaAdicionando = true
    idAnimalAlterado = null

    listar()
}

function limparForm(){
    document.getElementById("pedigree").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("telefone").value = ""           
}

function focarCaixaPedigree(){
    document.getElementById("pedigree").focus()
}

function alterar(idProcurado){
    for(let contador = 0; contador <= animais.length - 1; contador++){
        let animal = animais[contador]
        if (animal.id == idProcurado){
            document.getElementById("nome").value = animal.nome
            document.getElementById("pedigree").value = animal.pedigree
            document.getElementById("telefone").value = animal.telefone
            estaAdicionando = false
            idAnimalAlterado = animal.id
            exibirFormulario()
        }
    }
}

function listar(){
    console.log("lista de animais")

    let tbody = document.getElementById("tbody-animais")
    tbody.innerHTML = "" //limpa a tabela

    for(let contador = 0; contador <= animais.length - 1; contador++){
        let animal = animais[contador]

        console.log(contador, animal)
        let linha = document.createElement("tr")

        linha.innerHTML = `<tr>
            <td>${animal.pedigree}</td>
            <td>${animal.nome}</td>
            <td>${animal.telefone}</td>
            <td>
                <button onclick="alterar(${animal.id})">Alterar</button>
                <button class="excluir" onclick="excluir(${animal.id})">Excluir</button>
            </td>
        </tr>`

        tbody.appendChild(linha)
    }
}

function excluir(idProcurado){
    for(let contador = 0; contador <= animais.length - 1; contador++){
        let animal = animais[contador]
        if (animal.id == idProcurado){
            animais.splice(contador, 1) //remove um elemento da posição contador no vetor
            listar()
            ocultarFormulario()
            break
        }
    }
}

function adicionar(){
    limparForm()
    focarCaixaPedigree()
    estaAdicionando = true
    idAnimalAlterado = null
    exibirFormulario()
}

function limparErro(idErro){
    document.getElementById(idErro).style.display = 'none'
}

function exibirFormulario(){
    document.getElementById("formulario").style.display = "block"
}

function cancelar(){
    estaAdicionando = true
    idAnimalAlterado = null
    ocultarFormulario()
}

function ocultarFormulario(){
    document.getElementById("formulario").style.display = "none"
}

function rolarTabela(event){
    if (document.documentElement.scrollTop > 500){
        document.getElementById("voltar-topo").style.display = "block"
    }else{
        document.getElementById("voltar-topo").style.display = "none"
    }
}
function voltarAoTopo(){
    window.scrollTo(0, 0)
}