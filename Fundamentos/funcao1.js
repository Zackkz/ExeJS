//Função sem retorno
function ImprimirSoma(a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)
ImprimirSoma(2)
ImprimirSoma(2, 3, 4, 5, 6, 7)

//Função com retorno
function soma(a, b = 1) {
    return a + b

}

console.log(soma(2, 3))
console.log(soma(2))