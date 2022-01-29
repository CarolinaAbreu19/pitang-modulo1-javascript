class Automovel {
    constructor(nome, marca, modelo, paisOrigem) {
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;
    }

    getAutomovel() {
        return [
            this.nome,
            this.marca,
            this.modelo,
            this.paisOrigem
        ]
    }
};

const automovel1 = new Automovel("Gary?", "Fiat", "Uno", "...Inglaterra?");
const automovel2 = new Automovel("Luigi", "Ferrari", "...Vermelha?", "Itália");

const lista = [automovel1, automovel2];
for(let automovel of lista) {
    console.log(automovel.nome, automovel.marca);

    for(let key in automovel) {
        console.log(key);
    }
}