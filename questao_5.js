// 5 - Faça um programa que leia 3 números e identifique quais destes números digitados são 
// divisíveis por 5 e 7 ao mesmo tempo (divisão inteira). O conjunto dos números de teste, considera
//  os seguintes números: 14, 35 e 70.

let resposta = document.getElementById('resposta')

function divisivel(){
    if(numerouno % 5 === 0 && numerouno & 7 === 0){
        return '${numerouno} é divisível por 5 e 7'
    }else
}

function principal(){
    let numerouno = Number(document.getElementById('numerouno').value)
    let numerodos = Number(document.getElementById('numerodos').value)
    let numerotres = Number(document.getElementById('numerotres').value)

    resposta.innerHTML = ``
    resposta.innerHTML += `<br>`
}