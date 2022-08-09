let a = 10;
let b = a;
a = 30;
console.log({a, b});

//Los objetos se pasan por referencia 
let juan = {nombre : 'juan'};
let anna = juan;
console.log({juan, anna});
anna.nombre = 'anna';
console.log({juan, anna});

const cambiarNombre = (persona) =>{
    persona.nombre ='Tonny';
    return persona;
}
let peter = {nombre: 'peter'};
let tonny = cambiarNombre(peter);
console.log({peter, tonny});

//Resolver la referencia en el primer ejemplo
//Para resolver este problema se utilia el operador spread{...nombreX} y esto rompe la referecia que crea JS en los objs
let juan2 = {nombre : 'juan'};
let anna2 = {...juan2};
console.log({juan2, anna2});
anna2.nombre = 'anna';
console.log({juan2, anna2});

//Resolver la referencia en la funcion flecha
const cambiarNombre2 = ({...persona}) =>{
    persona.nombre ='Tonny';
    return persona;
}
let peter2 = {nombre: 'peter'};
let tonny2 = cambiarNombre2(peter2);
console.log({peter2, tonny2});

//Solucion para romper la referencia en ARREGLOS
//Una es con el spread como esto es un arreglo [...nombreX]
//La otra forma es con un metodo .slice()
const frutas = ['Manzana', 'Pera', 'Fresa'];

//console.time() sirve para iniciar el conteo de cuanto se tarda un procedimiento
//console.timeEnd() indica donde quieres que se termine el conteo 
//Estos dos siempre tienen que ir de la mano porque si no, no funciona
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.log({frutas, otrasFrutas});
