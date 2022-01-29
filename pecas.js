// Váriaveis, são um espaço para guardar algum valor
let pesoPeca = 200

//pesoPeca - Camel Case
//peso_peca - Snake Case
// PesoPeca - Pascal Case


if(pesoPeca > 100) {
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso Insuficiente, não é possivel cadastar")
}

let numeroPecas = 8

if(numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar essa peça")
} else {
    console.log("Não há espaço na caixa, não podemos cadastrar a peça")
}

let nomePeca = "Conjunto de velas"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3) {
    console.log("Nome de peças muito curto, não é possivel cadastrar")
} else {
    console.log("Nome de peça adequado, podemos cadastrar")
}