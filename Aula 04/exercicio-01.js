class Automovel {
    constructor (nome, marca, modelo, paisOrigem, tipoCombustivel) {
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;
        this.tipoCombustivel = tipoCombustivel;
    }

    getNome() {
        return this.nome;
    }

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getPaisOrigem() {
        return this.paisOrigem;
    }

    getTipoCombustivel() {
        return this.tipoCombustivel;
    }
}