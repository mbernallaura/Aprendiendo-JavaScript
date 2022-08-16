const carros = ['ford', 'Mazda', 'Honda', 'Toyota'];
//la condicion del while siempre tiene que ser true para poder funcionar 
//Condiciones que se consideran falsas: Undefined, null, false
let i = 0;
/*while (i < carros.length) {
    console.log(carros[i]);
    //i = i + 1; incementar de uno en uno
    //i++
    //i += 2 incrementar de dos en dos
    i++;
}*/

//Manera optima del anterior while con el break
 while (carros[i]) {
    if (i === 1) {
        break;
    }
    console.log(carros[i]);
    i++;
 }

//Continue
while (carros[i]) {
    if (i === 1) {
        i++
        continue;
    }
    console.log('Continue'+carros[i]);
    i++;
 }

//Do-while
//Se va a ejecutar el bloque de codigo almenos una vez
console.warn('Do while');
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);

