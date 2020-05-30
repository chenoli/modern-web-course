//Par Nome/Valor
const saudacao = 'Olá' //contexto léxico 1

function exec() {
    const saudacao = ', tudo bem?'
    return saudacao
}

//Objetos são grupos aninhados e pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao + exec() + "\n", cliente)