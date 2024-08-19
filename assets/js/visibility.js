var botaoNext = document.getElementById("btnProximos")
var botaoTabela = document.getElementById("btnTabela")
var tabela = document.querySelector(".pontos")
var proximosJogos = document.querySelector(".proximos")

botaoTabela.addEventListener ("click", () => {
    tabela.classList.remove("hidden")
    proximosJogos.classList.add("hidden")

    botaoTabela.classList.add("ativo")
    botaoNext.classList.remove("ativo")
})

botaoNext.addEventListener ("click", () => {
    tabela.classList.add("hidden")
    proximosJogos.classList.remove("hidden")

    botaoTabela.classList.remove("ativo")
    botaoNext.classList.add("ativo")
})