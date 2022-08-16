//Se tiene una tienda y se quiere saber si abre hoy la tienda

//Condiciones:
//*Dias de la semana abrimos a las 11
//*Los fines de semana a las 9

const dia = 1; //0: domingo, 1: Lunes...
const horaActual = 10;

let horaApertura;
let mensaje; // Esta abierto o cerrado, hoy abrimos a las XX
let mensaje2;

/*if(dia === 0 || dia === 6){
    console.log('Fin de semana');
    horaApetura = 9;
}else{
    console.log('Entre semana');
    horaApetura = 11;
}*/
//Manera optima de hacer lo anterior
//([0,6].includes(dia)) // Esto se cumplira si es un true
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

/*if (horaActual >= horaApertura) {
    mensaje = 'Abierto';
}else{
    //mensaje = 'Cerrado, hoy abrimos a las ' + horaApetura;
    //Manera optima de concatenar strings
    mensaje = `Cerrado, hoy abrimos a las ${horaApertura}`;
}*/
//Manera optima de hacer lo anterior
mensaje = (horaActual >= horaApertura) ? 'Abierto' : `Cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});

//mensaje2 = 'hola ' + horaApertura;
console.warn('Manera optima de concatenar ');
mensaje2 = `Hola ${horaApertura}`
console.log(mensaje2);