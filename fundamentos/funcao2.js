//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,3))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 4))

const imprimir = a => console.log(a)
imprimir(1)
imprimir('Olá')
