//Reto 3 TS2 Herencias2


class Aula {
  //1 - Atributos de class
  protected identificador:number=0;
  protected maxEstudiantes:number=0;
  protected asignaturaDestinada:typeMateria='matematicas';
  
  //2 - constructor de class
  constructor(newIdentificador:number,newMaxEstudiantes:number,newAsignaturaDestinada:typeMateria) {
  this.identificador=newIdentificador,
  this.maxEstudiantes=newMaxEstudiantes,
  this.asignaturaDestinada=newAsignaturaDestinada
  }

  //3 - Metodos de class

  //getters y setters

  getIdentificador(){
    return this.identificador
  }
  getMaxEstudiantes(){
    return this.maxEstudiantes
  }
  getAsignaturaDestinada(){
    return this.asignaturaDestinada
  }

  setIdentificador(valor:number){
    this.identificador = valor;
  }
  setMaxEstudiantes(valor:number){
    this.maxEstudiantes = valor;
  }
  setAsignaturaDestinada(valor:typeMateria){
    this.asignaturaDestinada = valor;
  }

  darClase():boolean{

    let sePuede=false;

    let profe = new Profesor('Edna Krabappel',40,'M','matematicas')
    let arrayAlumnos=[];

    for(let i=0;i<= this.maxEstudiantes;i++){
      arrayAlumnos.push(new Alumno(`Alumno ${i}`, (Math.round(Math.random()*(18-6))+6), 'H', (Math.round(Math.random()*10))))
    }

    let contAsistencias = 0;
    arrayAlumnos.forEach(element => {
      if(element.presencia()){
        contAsistencias++
      }
    });

    if(profe.getMateria()==this.asignaturaDestinada  &&  contAsistencias>(arrayAlumnos.length/2))

    




  }


}
