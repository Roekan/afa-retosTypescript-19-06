//Reto 3 TS2 Herencias2
type typeSexo='H'|'M'

abstract class Persona {
  //1 - Atributos de class
  protected nombre:string='alumno';
  protected edad:number=5;
  protected sexo:typeSexo='H';
  

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newSexo:typeSexo) {
    this.nombre = newNombre,
    this.edad = newEdad,
    this.sexo = newSexo
  }

  //3 - Metodos de class

  //getters y setters

  getNombre(){
    return this.nombre
  }
  getEdad(){
    return this.edad
  }
  getSexo(){
    return this.sexo
  }

  setNombre(valor:string){
    this.nombre = valor;
  }
  setEdad(valor:number){
    this.edad = valor;
  }
  setSexo(valor:typeSexo){
    this.sexo = valor;
  }


  presencia():boolean{
    return true;
  }



}
