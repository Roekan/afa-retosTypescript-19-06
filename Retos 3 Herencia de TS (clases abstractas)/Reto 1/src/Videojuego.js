"use strict";
//Reto 1 POO TS2
class Videojuego {
    //2 - constructor de class
    constructor(newTitulo, newHoras, newGenero, newCompany) {
        //1 - Atributos de class
        this.titulo = '';
        this.horasEstimadas = 10;
        this.entregado = false;
        this.genero = '';
        this.company = '';
        this.titulo = newTitulo,
            this.horasEstimadas = newHoras,
            this.entregado = this.entregado,
            this.genero = newGenero,
            this.company = newCompany;
    }
    //3 - Metodos de class
    //getters y setters
    getTitulo() {
        return this.titulo;
    }
    getTemporadas() {
        return this.horasEstimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.company;
    }
    setTitulo(valor) {
        this.titulo = valor;
    }
    setTemporadas(valor) {
        this.horasEstimadas = valor;
    }
    setGenero(valor) {
        this.genero = valor;
    }
    setCreador(valor) {
        this.company = valor;
    }
    toString() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Horas estimadas: ${this.horasEstimadas}`);
        console.log(`Entregado: ${this.entregado}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Compañía: ${this.company}`);
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
        return this.horasEstimadas - cantidad;
    }
    ;
}
