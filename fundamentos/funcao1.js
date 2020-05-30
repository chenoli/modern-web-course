//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma()
imprimirSoma(2)
imprimirSoma(2, 3)
imprimirSoma('a', 'b')
imprimirSoma(2, 3, 4, 5, 6)

//Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(1, 5))
console.log(soma(2))