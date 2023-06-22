"use strict";
//Reto 1 POO TS2
class Estudiante extends Persona {
    //2 - constructor de class
    constructor(newNombre, newEdad, newNumeroEstudiante) {
        super(newNombre, newEdad);
        //1 - Atributos de class
        this.numeroEstudiante = '';
        this.numeroEstudiante = newNumeroEstudiante;
    }
    //3 - Metodos de class
    //getters y setters
    getNumeroEstudiante() {
        return this.numeroEstudiante;
    }
    setNumeroEstudiante(valor) {
        this.numeroEstudiante = valor;
    }
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Numero de estudiante: ${this.numeroEstudiante}`);
    }
}
