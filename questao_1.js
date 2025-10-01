//R$ 550.00, ele ganha um desconto de 8% no preço final.
//loja de artigos esportivos
//de vôlei que custa R$ 247.58, de futebol que custa R$ 179.57 e de basquete que custa R$ 260.89, 
// respectivamente. Faça um programa que pergunte ao usuário quantos itens ele deseja comprar de
// cada produto e apresente o valor final de venda, considerando o possível desconto de 8%.

function gerarDesconto(desconto, preco){
    if (preco > 550){
        let totalDesconto = (100 - desconto) / 100
        let precoFinal = preco * totalDesconto
        return precoFinal
    }else{
        return preco
    }
}

function calcularPreco(qtVolei, qtFutebol, qtBasquete){
    let preco = (qtVolei * 247.58) + (qtFutebol * 179.57) + (qtBasquete * 260.89)
    return preco
}

let resposta = document.getElementById('resposta')

function principal(){
    //entrada de dados
    let qtVolei = Number(document.getElementById('qtVolei').value)
    let qtFutebol = Number(document.getElementById('qtFutebol').value)
    let qtBasquete = Number(document.getElementById('qtBasquete').value)
    let desconto = 8

    let valortotal = calcularPreco(qtVolei, qtFutebol, qtBasquete)
    let valorFinal = gerarDesconto(desconto, valortotal)
    //processamento e ou cálculo => chamada de funções

    //saída de dados
    resposta.innerHTML = ``
    resposta.innerHTML += `Seu valor final é: ${valortotal.toFixed(2)}<br>`
    resposta.innerHTML += `O valor da compra com desconto será: ${valorFinal.toFixed(2)}<br>`
}

principal()