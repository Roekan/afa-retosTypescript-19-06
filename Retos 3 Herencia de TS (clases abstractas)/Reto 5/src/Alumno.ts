//Reto 3 TS2 Herencias2


class Alumno extends Persona {
  //1 - Atributos de class
  protected calificacion:number=0;

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newSexo:typeSexo,newCalificacion:number) {
    super(newNombre, newEdad, newSexo);
    this.calificacion = newCalificacion
  }

  //3 - Metodos de class

  //getters y setters


  getCalificacion(){
    return this.calificacion
  }

  setCalificacion(valor:number){
    this.calificacion = valor;
  }
  
  presencia():boolean{
    let res = true
    if(Math.floor(Math.random()*2)==1){
      res=false;
    }
    return res;
  }





}
