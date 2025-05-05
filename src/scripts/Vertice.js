export default class Vertice {
    constructor(data) {
        this.data = data;
        this.arestaEntrada = [];
        this.arestaSaida = [];
    }

    adicionarArestaEntrada(aresta) {
        this.arestaEntrada.push(aresta)
    }
    adicionarArestaSaida(aresta) {
        this.arestaSaida.push(aresta)
    }

    getDado() {
        return this.data
    }

    setDado(data) {
        this.data = data;
    }

    getArestaSaida() {
        return this.arestaSaida;
    }

    setArestaSaida(arestaSaida) {
        this.arestaSaida = arestaSaida;
    }

    getArestaEntrada() {
        return this.arestaEntrada;
    }

    setArestaEntrada(arestaEntrada) {
        this.arestaEntrada = arestaEntrada;
    }

}