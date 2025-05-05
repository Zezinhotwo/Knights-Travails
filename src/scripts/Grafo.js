import Aresta from "./Aresta";
import Vertice from "./Vertice";

export default class Grafo {

  constructor() {
    this.vertice = [];
    this.aresta = [];
  }

  adicionarVertice(dado) {
    novoVertice = new Vertice(dado);
    this.vertice.push(novoVertice);
  }
  adicionarAresta(peso, dadoInicio, dadoFim) {
    inicio = this.getVertice(dadoInicio);
    fim = this.getVertice(dadoFim);
    arestas = new Aresta(peso, inicio, fim);
    new Vertice().adicionarArestaEntrada(inicio);
    new Vertice().adicionarArestaSaida(inicio);
    this.aresta.push[this.aresta];
  }

  getVertice(dado) {
    vertice = null;
    for (let i = 0; i < this.vertice.length; i++) {
      if (this.vertice[i] === dado) {
        vertice = this.vertice[i];
        break;
      }
    }
    return vertice;
  }

  buscaEmLargura() {
    const marcados = [];
    let fila = [];
    let current = new Vertice();
    // let current = this.vertice[0];

    marcados.push(current.getDado());

    console.log(current)


  }

}