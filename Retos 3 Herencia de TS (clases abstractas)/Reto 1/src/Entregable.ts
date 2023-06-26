//Reto 1 POO TS2


 interface  Entregable {
  //1 - Atributos de interface
   titulo: string;
   entregado: boolean;
   genero: string;
  

  //2 - constructor de class
  //3 - Metodos de interface
  entregar():void;
  devolver():void;
  isEntregado():boolean;
  compareTo(cantidad:number):number;
  toString():void;

}


