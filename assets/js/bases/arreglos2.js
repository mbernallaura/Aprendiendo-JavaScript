let juegos = ['Zelda', 'Mario', 'Metroid', 'Megaman'];
console.log(juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero, ultimo});

//Recorrer el arreglo (Array)
juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

//Agregar elementos al final del arreglo
let nuevoElemento = juegos.push(123);
console.log({nuevoElemento, juegos});

//Agregar elementos al inicio del arreglo
let elemetoPrincipio = juegos.unshift('Contra');
console.log({elemetoPrincipio, juegos});

//Borrar el ultimo elemento del array
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//Borrar elemento seleccionado del arreglo
//.splice(posicionInicial, hastaQuePosicionBorrar)
let juegosBorrados = juegos.splice(0, 1);
console.log({juegosBorrados, juegos});

//Saber la posicion de un elemento, (sensible de las mayuscuas y las minusculas)
let marioIndex = juegos.indexOf('Mario');
console.log({marioIndex});
