//idades para voto

//let resposta = document.getElementById('resposta')

function verificar_idade(idade){
    if (idade >= 18 && idade <=70){
        return 'seu voto é obrigatório'
    }else if(idade <= 16){
        return 'você não pode votar ainda'
    }else{
        return 'seu voto é facultativo'
    }
}

function principal(){
    let idade = Number(document.getElementById('idade').value)
    let nome = document.getElementById('nome').value

    let resultado = verificar_idade(idade)

    //console.log('${resultado}')

    resposta.innerHTML = ``
    resposta.innerHTML += `${nome}, ${resultado}.`
}
