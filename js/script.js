let animais = [];

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
    armazenarDados(animais)
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

    carregarDados()

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
            armazenarDados(animais)
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
function armazenarDados(animais){
    window.localStorage.setItem("animais", JSON.stringify(animais)) //converte de JSON para string
}
function carregarDados(){
    let dados = window.localStorage.getItem("animais")
    animais = JSON.parse(dados) //converte de string para JSON
}