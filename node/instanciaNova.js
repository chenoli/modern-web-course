//usando factory que retorna uma nova instância
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}