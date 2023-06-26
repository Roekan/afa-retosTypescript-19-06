//Reto 3 TS2 Herencias2
type typeMateria='matematicas'|'filosofia'|'fisica';

class Profesor extends Persona {
  //1 - Atributos de class
  protected materia:typeMateria='matematicas';
  

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number,newSexo:typeSexo,newMateria:typeMateria) {
    super(newNombre, newEdad, newSexo);
    this.materia = newMateria
  }

  //3 - Metodos de class

  //getters y setters

  getMateria(){
    return this.materia
  }

  setMateria(valor:typeMateria){
    this.materia = valor;
  }

  presencia():boolean{
    let res = true
    if(Math.floor(Math.random()*5)==1){
      res=false;
    }
    return res;
  }


}
