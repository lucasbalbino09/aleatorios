function gerar() {

    let num = Math.floor(Math.random() * 5) + 1;
    let jogador = document.getElementById("j1").value * 1;
    let res = document.getElementById("res");


    if (jogador.value === 'number') {

        window.alert("Número Invalido, verifique os dados e tente novamente.");

    } else {
        if (num == jogador) {
            res.innerHTML = "parabens"
        } else {
            res.innerHTML = `Errou, o resultado é .. ${num}`


        }
    }
}