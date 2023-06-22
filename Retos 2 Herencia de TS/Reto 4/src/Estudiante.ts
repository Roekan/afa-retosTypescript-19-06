//Reto 1 POO TS2


class Estudiante extends Persona{
  //1 - Atributos de class

  protected numeroEstudiante:string='';

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newNumeroEstudiante:string){
    super(newNombre,newEdad)
    this.numeroEstudiante=newNumeroEstudiante
  }
  //3 - Metodos de class

  //getters y setters


  getNumeroEstudiante():string{
    return this.numeroEstudiante;
  }
  setNumeroEstudiante(valor:string){
    this.numeroEstudiante=valor;
  }

  mostrarInformacion(){
    super.mostrarInformacion()
    
      console.log(`Numero de estudiante: ${this.numeroEstudiante}`)
    
  }


}


