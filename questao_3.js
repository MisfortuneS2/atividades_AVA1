//Faça um programa que calcule a seguinte função matemática para uma faixa de valores de 0 à 10, a ser digitada pelo usuário. 
//A equação é a seguinte: f(x) = ( 5x + 4 ) / ( 2x + 1). Se o valor for negativo ou maior que 10, o sistema deve imprimir uma
//mensagem dizendo “valor fora da faixa de cálculo permitida”.

// function valor(valor){
//     if (valor < 0 || valor > 10){
//         return 'valor fora da faixa de cálculo permitida'
//     }else{
//         return valor
//     }
// }

// function calcular(xis){
//     let xis = (5 * xis + 4)  / (2 * xis + 1)
// }

// let resposta = document.getElementById('resposta')

// function principal(){
// let xis = Number(document.getElementById('xis').value)

// let resultado = calcular(xis)
// let resul = valor(valor)


// resposta.innerHTML = ``
// resposta.innerHTML += `O valor da função é: ${resultado}`
// resposta.innerHTML += `O valor da função é: ${resul}`
// }

// principal()

let resposta = document.getElementById('resposta')

function principal(){
    let xis = Number(document.getElementById('xis').value)

    let valor = xis = (5 * xis + 4)  / (2 * xis + 1)

    if (valor < 0 || valor > 10){
                resposta.innerHTML = 'Valor fora da faixa de cálculo permitida'
            }else{
            resposta.innerHTML = 'O valor de x será: ' ${valor}
        }
}
