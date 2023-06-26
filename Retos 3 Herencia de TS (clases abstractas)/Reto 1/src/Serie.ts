//Reto 1 POO TS2


class Serie implements Entregable{
  //1 - Atributos de class
  public titulo: string = '';
  public numeroDeTemporadas: number = 3;
  public entregado: boolean = false;
  public genero: string = '';
  public creador: string = '';
  

  //2 - constructor de class


  constructor(newTitulo:string,newCreador:string) {
    this.titulo = newTitulo,
    this.creador = newCreador
  }


  //3 - Metodos de class

  //getters y setters

  getTitulo(){
    return this.titulo
  }
  getTemporadas(){
    return this.numeroDeTemporadas
  }
  getEntregado(){
    return this.entregado
  }
  getGenero(){
    return this.genero
  }
  getCreador(){
    return this.creador
  }

  setTitulo(valor:string){
    this.titulo = valor;
  }
  setTemporadas(valor:number){
    this.numeroDeTemporadas = valor;
  }
  setGenero(valor:string){
    this.genero = valor;
  }
  setCreador(valor:string){
    this.creador = valor;
  }

  toString():void{
    console.log(`Título: ${this.titulo}`)
    console.log(`Nº de temporadas: ${this.numeroDeTemporadas}`)
    console.log(`Entregado: ${this.entregado}`)
    console.log(`Género: ${this.genero}`)
    console.log(`Creador: ${this.creador}`)
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
    return this.numeroDeTemporadas-cantidad;
  };

}


