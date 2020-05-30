function tratarErroELancar(erro) {
    //throw new Erro('Errô')
    //throw 10
    //throw true
    throw {
        nome: erro.name,
        mensagem: erro.message,
        date: new Date(Date.now)
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj);

