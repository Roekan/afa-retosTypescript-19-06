"use strict";
//Reto 1 POO TS2
class Persona {
    //2 - constructor de class
    constructor(newNombre, newEdad) {
        //1 - Atributos de class
        this.nombre = '';
        this.edad = 0;
        this.nombre = newNombre,
            this.edad = newEdad;
    }
    //3 - Metodos de class
    //getters y setters
    getNombre() {
        return this.nombre;
    }
    setNombre(valor) {
        this.nombre = valor;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(valor) {
        this.edad = valor;
    }
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
    }
}
