let dobro = function (a) {
    return a * 2
}

dobro = (a) => {
    return a * 2
}

dobro = a => a * 2
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um param
console.log(ola())