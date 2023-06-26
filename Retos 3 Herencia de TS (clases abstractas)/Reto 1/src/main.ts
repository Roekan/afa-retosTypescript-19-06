
/*Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada
uno. */

//Array Series
//titulo,numeroDeTemporadas,entregado,genero,creador
let arraySeries=[  
    new Serie ('From', 'Hidetaka Miyazaki'), 
    new Serie ('Scrubs', 'Bill Lawrence'), 
    new Serie ('Gravity Falls','Disney'),
    new Serie ('Deadman in wonderland','Jinsei Kataoka'), 
    new Serie ('The office','Greg Daniels')         
]
arraySeries.forEach(element => {
    element.toString();
    console.log(`///`)
});



//Array Videojuegos
//titulo,horas estimadas,entregado,genero,compañia
let arrayVideojuegos=[  
    new Videojuego ('Lies of P',150,'terror', 'Round8 Studio'), 
    new Videojuego ('Bioshock',100,'terror', 'Irrational Games'), 
    new Videojuego ('Zelda',999,'aventura', 'Nintendo'),
    new Videojuego ('Monster hunter',360, 'accion','Capcom'), 
    new Videojuego ('Unepic',50,'rol', 'Unepic')         
]

arrayVideojuegos.forEach(element => {
    element.toString();
    console.log(`///`)
});
console.log(`///////////////////////////////////////////////`)
/*Crea un objeto en cada posición del array, con los valores que desees, puedes
usar distintos constructores.*/
console.log(`Objeto creado: `)
arraySeries[0].setTitulo('Digimon');
arraySeries[0].setTemporadas(6);
arraySeries[0].setGenero('Aventuras');
arraySeries[0].setCreador('Akiyoshi Hongo');
arraySeries[0].toString();
console.log(`///////////////////////////////////////////////`)
/*Entrega algunos Videojuegos y Series con el método entregar().*/
console.log(`Objetos entregados: `)
arrayVideojuegos[0].entregar();
arrayVideojuegos[2].entregar();


arrayVideojuegos[0].toString();
arrayVideojuegos[2].toString();

console.log(`///////////////////////////////////////////////`)
/*Cuenta cuantos Series y Videojuegos hay entregados. Al contarlos,
devuélvelos.*/
console.log(`Contar entregados: `)
let contadorEntregados=0;

arraySeries.forEach(element => {
    if(element.getEntregado()){
        contadorEntregados++;
    }

});

arrayVideojuegos.forEach(element => {
    if(element.getEntregado()){
        contadorEntregados++;
    }

});
console.log(`Series y peliculas entregados: ${contadorEntregados}`)

console.log(`///////////////////////////////////////////////`)
/*Por último, indica el Videojuego tiene más horas estimadas y la serie con mas
temporadas. Muestralos en pantalla con toda su información (usa el método
toString()).*/
console.log(`Series con mas temporadas: `)
arraySeries[0].setTemporadas(5)
arraySeries[2].setTemporadas(7)
arraySeries[4].setTemporadas(6)

let maxTeporadas = arraySeries[0].getTemporadas();
let posicionMaxTemporadas=0

arraySeries.forEach((element,i) => {
    if(maxTeporadas<element.getTemporadas()){
        maxTeporadas=element.getTemporadas(); 
        posicionMaxTemporadas=i;
    }
});
arraySeries[posicionMaxTemporadas].toString()

console.log(`//`)
console.log(`Videojuego con mas horas: `)

let maxHoras = arraySeries[0].getTemporadas();
let posicionMaxHoras=0

arrayVideojuegos.forEach((element,i) => {
    if(maxHoras<element.getHoras()){
        maxHoras=element.getHoras(); 
        posicionMaxHoras=i;
    }
});
arrayVideojuegos[posicionMaxHoras].toString()
