let resposta = document.getElementById('resposta')

function principal(){
    //F (celsius * 1.8) + 32

    let celsius = Number (document.getElementById('celsius').value)

    let calculo = (celsius * 1.8) + 32

    console.log(`O valor em fahrenheit será: ${calculo.toFixed(2)}°F
`)

    resposta.innerHTML = ``
    resposta.innerHTML += `O valor em fahrenheit será: ${calculo.toFixed(2)}°F`
}
