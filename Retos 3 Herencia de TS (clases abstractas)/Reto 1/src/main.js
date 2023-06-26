"use strict";
/*Crea dos arrays, uno de Series y otro de Videojuegos, de 5 posiciones cada
uno. */
//Array Series
//titulo,numeroDeTemporadas,entregado,genero,creador
let arraySeries = [
    new Serie('From', 'Hidetaka Miyazaki'),
    new Serie('Scrubs', 'Bill Lawrence'),
    new Serie('Gravity Falls', 'Disney'),
    new Serie('Deadman in wonderland', 'Jinsei Kataoka'),
    new Serie('The office', 'Greg Daniels')
];
//Array Videojuegos
//titulo,horas estimadas,entregado,genero,compañia
let arrayVideojuegos = [
    new Videojuego('Lies of P', 100, 'terror', 'Round8 Studio'),
    new Videojuego('Bioshock', 100, 'terror', 'Irrational Games'),
    new Videojuego('Zelda', 100, 'aventura', 'Nintendo'),
    new Videojuego('Monster hunter', 100, 'accion', 'Capcom'),
    new Videojuego('Unepic', 100, 'rol', 'Unepic')
];
/*Crea un objeto en cada posición del array, con los valores que desees, puedes
usar distintos constructores.*/
arraySeries[0].setTitulo('Digimon');
arraySeries[0].setTemporadas(6);
arraySeries[0].setGenero('Aventuras');
arraySeries[0].setCreador('Akiyoshi Hongo');
arraySeries[0].toString();
