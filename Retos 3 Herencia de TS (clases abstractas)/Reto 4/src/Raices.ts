//Reto 2 TS2 Herencias2


class Raices {
  //1 - Atributos de class
  protected a:number=0;
  protected b:number=0;
  protected c:number=0;
  

  //2 - constructor de class
  constructor(newA:number,newB:number,newC:number) {
    this.a = newA,
    this.b = newB,
    this.c = newC
  }

  //3 - Metodos de class

  //getters y setters

  getA(){
    return this.a
  }
  getB(){
    return this.b
  }
  getC(){
    return this.c
  }

  setA(valor:number){
    this.a = valor;
  }
  setB(valor:number){
    this.b = valor;
  }
  setC(valor:number){
    this.c = valor;
  }


  getDiscriminante():number{
    let a = this.a;
    let b = this.b;
    let c = this.c;
    let res = (Math.pow(b,2)-(4*a*c));
    return res;
  }

  tieneRaices():boolean{
    //Si tiene 2 soluciones = true
    let tiene=false;
    if(this.getDiscriminante()>=0){
      tiene=true;
    }
    return tiene;
  }

  tieneRaiz():boolean{
    //Si tiene 1 soluciones = true
    let tiene=false;
    if(this.getDiscriminante()==0){
      tiene=true;
    }
    return tiene;
  }


  obtenerRaices():void{
    let a = this.a;
    let b = this.b;
    let c = this.c;
    if(this.tieneRaices()){
      console.log(`Resultado negativo: ${(-b*Math.sqrt((Math.pow(b,2)-(4*a*c)))/(2*a))}`);
      console.log(`Resultado positivo: ${(b*Math.sqrt((Math.pow(b,2)-(4*a*c)))/(2*a))}`);
    }
  }

  obtenerRaiz():void{
    let a = this.a;
    let b = this.b;
    let c = this.c;
    if(this.tieneRaiz()){
      console.log(`Resultado positivo: ${(b*Math.sqrt((Math.pow(b,2)-(4*a*c)))/(2*a))}`);
    }

  }


  calcular():void{
    if(this.tieneRaices()){
      this.obtenerRaices();
    }else if(this.tieneRaiz()){
      this.obtenerRaiz();
    }else{
      console.log('No tiene solucion');
    };
  }





}
