function calcularMedia() {
    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let n3 = parseFloat(document.getElementById("n3").value)
    let nome = document.getElementById("nomeAluno").value

    media = (n1 + n2 + n3 ) / 3
    
    if (media >= 7) {
        document.getElementById("resultado").innerText = `nome: ${nome}, média: ${media} aprovado`
    } else if (media >= 5 && media < 7) {
        document.getElementById("resultado").innerText = `nome: ${nome}, média: ${media} em recuperação`
    } else {
        document.getElementById("resultado").innerText = `nome: ${nome}, média: ${media} reprovado`
    }
}

function mostrarTabuada() {
    let num = document.getElementById("num").value
    let tabuada = document.getElementById("tabuada")

    tabuada.innerHTML = ""

    if (num < 1 || num > 20 ) {
        tabuada.innerHTML = "Numéro invalído! dégite de 1 a 20"
    } else {
        for (let i = 1; i <= 10; i++) {
            tabuada.innerHTML += num + " x " + i + " = " + (num * i) + "<br>"
        }
    }
}
function limparTabuada() {
    document.getElementById("num").value = ""
    document.getElementById("tabuada").innerHTML = ""
}

function calcularDesconto() {
    let preco = parseFloat(document.getElementById("preco").value)
    let desconto = parseFloat(document.getElementById("desconto").value)

    let economia = preco * desconto / 100
    let total = preco - economia

    if (preco <= 0 || desconto < 0 || desconto > 100) {
        document.getElementById("resultadoDesconto").innerText = "valores inválidos!"
    } else {
        document.getElementById("resultadoDesconto").innerText =
            `economizado: R$ ${economia}, total a pagar: R$ ${total}`
    }
}
    
