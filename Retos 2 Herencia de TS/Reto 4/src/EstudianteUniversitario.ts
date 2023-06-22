//Reto 1 POO TS2


class EstudianteUniversitario extends Estudiante{
  //1 - Atributos de class

  protected carrera:string='';

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newNumeroEstudiante:string,newCarrera:string){
    super(newNombre,newEdad,newNumeroEstudiante)
    this.carrera=newCarrera
  }
  //3 - Metodos de class

  //getters y setters


  getCarrera():string{
    return this.carrera;
  }
  setCarrera(valor:string){
    this.carrera=valor;
  }

  mostrarInformacion(){
    super.mostrarInformacion()
    
      console.log(`Carrera: ${this.carrera}`)
    
  }

}


