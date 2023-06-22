"use strict";
//Reto 1 POO TS2
class EstudianteUniversitario extends Estudiante {
    //2 - constructor de class
    constructor(newNombre, newEdad, newNumeroEstudiante, newCarrera) {
        super(newNombre, newEdad, newNumeroEstudiante);
        //1 - Atributos de class
        this.carrera = '';
        this.carrera = newCarrera;
    }
    //3 - Metodos de class
    //getters y setters
    getCarrera() {
        return this.carrera;
    }
    setCarrera(valor) {
        this.carrera = valor;
    }
    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Carrera: ${this.carrera}`);
    }
}
