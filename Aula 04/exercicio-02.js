class Carro {
    constructor(velocidadeMax, numeroRodas, temStep, ocupantes) {
        this.velocidadeMax = velocidadeMax;
        this.numeroRodas = numeroRodas;
        this.temStep = temStep;
        this.ocupantes = ocupantes;
    }

    getVelocidadeMax() {
        return this.velocidadeMax;
    }

    getNumeroRodas() {
        return this.numeroRodas;
    }

    getTemStep() {
        return this.temStep;
    }

    getOcupantes() {
        return this.ocupantes;
    }
}