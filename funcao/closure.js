//escopo criado quando uma função é declarada
//esse escopo permite que a função acesse e manipule variáveis externar à função

//contexto léxico em ação!
const x = 'Global'

function fora() {
    const x ='Local'
    function dentro() {
        return x
    }

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())