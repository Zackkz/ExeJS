//armazenando uma função em uma váriavel 

const ImprimirSoma = function (a, b) {
    console.log(a + b)
}

ImprimirSoma(2, 3)

//Armazenando uma função Arrow em uma váriavel 


const soma = (a, b) => {
    return a + b
}

console.log(soma (2, 6))

// Retorno implicito 


const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

const imprimir2 = (a) => console.log(a)

imprimir2("Legal")