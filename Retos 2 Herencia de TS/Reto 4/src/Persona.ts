//Reto 1 POO TS2


class Persona{
  //1 - Atributos de class

  protected nombre:string='';
  protected edad:number=0;

  //2 - constructor de class
  constructor(newNombre:string,newEdad:number){
    this.nombre=newNombre,
    this.edad=newEdad
  }
  //3 - Metodos de class

  //getters y setters


  getNombre():string{
    return this.nombre;
  }
  setNombre(valor:string){
    this.nombre=valor;
  }

  getEdad():number{
    return this.edad;
  }
  setEdad(valor:number){
    this.edad=valor;
  }

  mostrarInformacion(){
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Edad: ${this.edad}`)
  }

}


