"use strict";
//Reto 1 POO TS2
class Serie {
    //2 - constructor de class
    constructor(newTitulo, newCreador) {
        //1 - Atributos de class
        this.titulo = '';
        this.numeroDeTemporadas = 3;
        this.entregado = false;
        this.genero = '';
        this.creador = '';
        this.titulo = newTitulo,
            this.creador = newCreador;
    }
    //3 - Metodos de class
    //getters y setters
    getTitulo() {
        return this.titulo;
    }
    getTemporadas() {
        return this.numeroDeTemporadas;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    setTitulo(valor) {
        this.titulo = valor;
    }
    setTemporadas(valor) {
        this.numeroDeTemporadas = valor;
    }
    setGenero(valor) {
        this.genero = valor;
    }
    setCreador(valor) {
        this.creador = valor;
    }
    toString() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Nº de temporadas: ${this.numeroDeTemporadas}`);
        console.log(`Entregado: ${this.entregado}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Creador: ${this.creador}`);
    }
    entregar() {
        this.entregado = true;
    }
    ;
    devolver() {
        this.entregado = false;
    }
    ;
    isEntregado() {
        return this.entregado;
    }
    ;
    compareTo(cantidad) {
        return this.numeroDeTemporadas - cantidad;
    }
    ;
}
