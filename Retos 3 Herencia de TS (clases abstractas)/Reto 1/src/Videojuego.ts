//Reto 1 POO TS2


class Videojuego implements Entregable{
  //1 - Atributos de class
  public titulo: string = '';
  public horasEstimadas: number = 10;
  public entregado: boolean = false;
  public genero: string = '';
  public company: string = '';
  

  //2 - constructor de class
  constructor(newTitulo:string,newHoras:number,newGenero:string,newCompany:string) {
    this.titulo = newTitulo,
    this.horasEstimadas = newHoras,
    this.entregado = this.entregado,
    this.genero = newGenero,
    this.company = newCompany
  }

  //3 - Metodos de class

  //getters y setters

  getTitulo(){
    return this.titulo
  }
  getHoras(){
    return this.horasEstimadas
  }
  getEntregado(){
    return this.entregado
  }
  getGenero(){
    return this.genero
  }
  getCreador(){
    return this.company
  }

  setTitulo(valor:string){
    this.titulo = valor;
  }
  setHoras(valor:number){
    this.horasEstimadas = valor;
  }
  setGenero(valor:string){
    this.genero = valor;
  }
  setCreador(valor:string){
    this.company = valor;
  }

  toString():void{
    console.log(`Título: ${this.titulo}`)
    console.log(`Horas estimadas: ${this.horasEstimadas}`)
    console.log(`Entregado: ${this.entregado}`)
    console.log(`Género: ${this.genero}`)
    console.log(`Compañía: ${this.company}`)
  }

  entregar(){
    this.entregado=true;
  };
  devolver(){
    this.entregado=false;
  };

  isEntregado(){
    return this.entregado;
  };

  compareTo(cantidad:number){
    return this.horasEstimadas-cantidad;
  };
}


