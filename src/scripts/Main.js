import Grafo from "./Grafo";

export default class Main {
    constructor(){
        new Grafo().adicionarVertice("Joao");
        new Grafo().adicionarVertice("KAio");
        new Grafo().adicionarVertice("Lau");

        new Grafo().adicionarAresta(2, "joao", "KAio")

        new Grafo.buscaEmLargura();
    }

}
