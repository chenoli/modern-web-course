//Novo recurso do ES2015 (ES6)
const pessoa = {
    noem: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa

console.log(nome, idade)