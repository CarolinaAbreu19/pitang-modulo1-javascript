class Moto {
    constructor(velocidadeMax, numeroRodas, ocupantes) {
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas = numeroRodas;
        this.ocupantes = ocupantes;
    }

    getVelocidadeMax() {
        return this.velocidadeMax;
    }

    getNumeroRodas() {
        return this.numeroRodas;
    }

    getOcupantes() {
        return this.ocupantes;
    }
}