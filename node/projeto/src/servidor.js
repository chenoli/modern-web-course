const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos()) //convertido para JSON automaticamente
})

app.get('/produtos/:id', (request, response) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos/', (request, response) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.put('/produtos/:id', (request, response) => {
    const produto = bancoDeDados.salvarProduto({
        id: request.params.id,
        nome: request.body.nome,
        preco: request.body.preco
    })
    response.send(produto)
})

app.delete('/produtos/:id', (request, response) => {
    const produto = bancoDeDados.excluirProduto(request.params.id)
    response.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})