class Automovel {
    constructor(nome, marca, modelo, paisOrigem) {
        this.nome = nome;
        this.marca = marca;
        this.modelo = modelo;
        this.paisOrigem = paisOrigem;
    }

    getAutomovel() {
        return { ...this }
    }
};

const automovel1 = new Automovel("Celta", "Fiat", "2012", "...Inglaterra?");
const automovel2 = new Automovel("Luigi", "Ferrari", "...Vermelha?", "Itália");

console.log(automovel1.getAutomovel());

const lista = [automovel1, automovel2];
for(let automovel of lista) {
    console.log(automovel.nome, automovel.marca);

    for(let key in automovel) {
        console.log(key);
    }
}