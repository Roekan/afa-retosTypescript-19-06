"use strict";
/*20. Una tienda ofrece un descuento del 15% sobre el total de la compra durante el
mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se
debe cobrar al cliente.*/
// let mes:string = prompt('Introduzca el mes').toLowerCase();
// // let mes = 'Febrero';
// let importe:number=prompt('Introduzca el importe');
// // let importe:number=5;
// let precio:number=0;
// if(mes.toLowerCase() == 'octubre'){
//     precio= importe-((importe/100)*15);
// }else{
//     precio=importe;
// }
// console.log(`Mes: ${mes}`)
// console.log(`Importe: ${importe}`)
// console.log(`Precio: ${precio}`)
/*21. Realizar un algoritmo que, dado un número entero, visualice en pantalla si es par
o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para
que un número sea par, se debe dividir entre dos y que su resto sea 0).*/
//  let numero:number=prompt('Introduzca numero');
//  let tipo:string ='es impar';
//  if(numero==0){
// tipo='no es par ni impar';
// }else if(numero%2==0){
//     tipo='es par'
// }
//  console.log(`El número ${numero} ${tipo}`)
/*22. Modificar el algoritmo anterior, de forma que, si se teclea un cero, se vuelva a
pedir el número por teclado (así hasta que se teclee un número mayor que cero)
(recuerda la estructura mientras).*/
// let numero:number= 0;
// let tipo:string ='';
// do{
//     numero= Number(prompt('Introduzca numero'));
//     if(numero%2==0){
//         tipo='par';
//     }else{
//         tipo='impar';
//     }
// }while(numero<=0)
// console.log(`El número ${numero} es ${tipo}`)
/*23. Algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo
de grado superior o no. Para acceder a un grado superior, si se tiene un título de
bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba
de acceso.*/
// let titulo:string=prompt('¿Tienes titulo de bachillerato?').toLowerCase();
// let prueba:string=prompt('¿Has aprobado una prueba de acceso?').toLowerCase();
// let puede:string='No puedes';
// if(titulo == 'si' || prueba== 'si'){
//     puede='Puedes';
// }
// console.log(`${puede} acceder a cursar un ciclo formativo de grado superior`)
/*24. Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números
naturales (recuerda la estructura desde-hasta).*/
// for(let i=1;i<10;i++){
//     console.log(`El cuadrado de ${i} es ${Math.pow(i, 2)}`);
// }
/*25. Se pide representar el algoritmo que nos calcule la suma de los N primeros
números naturales. N se leerá por teclado (no tenemos por qué llamar a la
variable N, podemos llamarla como queramos).*/
// let cantidad:number=prompt('Introduzca cantidad de numeros a sumar');
// let suma:number=0;
// for(let i=1;i<=cantidad;i++){
//     suma +=i;
// }
// console.log(`El total de sumar desde 1 a ${cantidad} es: ${suma}`)
/*26. Se pide representar el algoritmo que nos calcule la suma de los N primeros números
pares. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.*/
//let input:number=prompt('Introduzca numero');
// let input:number=5;
// let final:number = input*2;
// let suma:number=0;
// for(let i=0;i<=final;i++){
//     if(input%2==0){
//         suma+=input;
//     }
//     input++
// }
// console.log(`La suma total es ${suma}`);
/*27. Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo:
5,3,0,2,4,4,0,0,2,3,6, 0,...1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará números negativos.*/
// let numero:number= 0;
// let cant:number=0;
// let suma:number=0;
// let media:number=0;
// while(numero>-1){
//     numero= Number(prompt(`Introduzca numero ${cant +1}`));
//     if(numero>=0){
//         suma+=numero
//     cant++;
//     }
// }
// media=suma/cant
// console.log(`Media ${media}`)
/*28. Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una
clave. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un
mensaje indicándonos que hemos agotado esos 3 intentos (Recomiendo utilizar un
interruptor). Si acertamos la clave, saldremos directamente del programa.*/
// let intentos:number=0;
// let clave:string;
// do{
//     clave=prompt('Introduzca la contraseña');
//     intentos++;
//     if(clave=='eureka'){
//         break;
//     }
// }while(intentos<3)
// if(clave=='eureka'){
//     console.log('Has acertado la clave');
// }else{
//     console.log('Has agotado tus intentos');
// }
/*29. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el
mínimo y la media de todos ellos. Piensa cómo debemos inicializar las variables.*/
// let numero:number= 0;
// /*Media */
// let cant:number=0;
// let suma:number=0;
// let media:number=0;
// /*MAX */
// let max:number=0;
// /*MIN */
// let min:number;
// do{
//     numero= Number(prompt(`Introduzca numero ${cant +1}`));
//     if(numero>0){
//         suma+=numero;
//         cant++;
//     }
//     if(numero>max){
//         max=numero;
//     }
//     if((numero<min && numero !=0) || min==undefined){
//         min=numero;
//     }
// }while(numero<0 || numero>0);
// media=suma/cant;
// console.log(`Máximo ${max}`);
// console.log(`Mínimo ${min}`);
// console.log(`Media ${media}`);
/*30. Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que
hay entre 1 y 100.*/
// console.log(`Multiplos de 2`)
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(`${i}`)
//     }
// }
// console.log(`Multiplos de 3`)
// for(let i=1;i<=100;i++){
//     if(i%3==0){
//         console.log(`${i}`)
//     }
// }
/*31. Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se
calcula según el siguiente criterio: la parte práctica vale el 10%; la parte de problemas
vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre del alumno, las tres
notas, escribirá el resultado y volverá a pedir los datos del siguiente alumno hasta que el
nombre sea una cadena vacía. Las notas deben estar entre 0 y 10, si no lo están, no
imprimirá las notas, mostrará un mensaje de error y volverá a pedir otro alumno.*/
let practica = prompt('Introduce la nota práctica'); /*10*/
let problemas = prompt('Introduce la nota de problemas'); /*50*/
let teorica = prompt('Introduce la nota teorica'); /*40*/
let errorNota = false;
if (practica > 10 || practica < 0 || problemas > 10 || problemas < 0 || teorica > 10 || teorica < 0) {
    errorNota = true;
}
if (errorNota == false) {
    let porcentajePractica = (((practica * 100) / 10) / 100) * 1;
    let porcentajeProblemas = (((problemas * 100) / 10) / 100) * 5;
    let porcentajeTeorica = (((teorica * 100) / 10) / 100) * 4;
    let notaTotal = porcentajePractica + porcentajeProblemas + porcentajeTeorica;
    console.log(`Nota total ${notaTotal}`);
}
else {
    console.log(`Las notas no se han introducido correctamente`);
}
