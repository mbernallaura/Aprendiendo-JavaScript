let pj = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coors: {
        lat: 34.034,
        lng: -118.78
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion :{
        zip: '10880, 90265',
        ubicacion: 'Malibu'
    },
    'ultima-pelicula': 'Infinity War'
};

//Maneras de acceder a las propiedades de los objs
console.log('Nombre:', pj.nombre);
console.log('Nombre:', pj['nombre']);

//Para los arreglos u objetos dentro de un objeto
console.log('Latitud:', pj.coors.lat);
console.log('Ultimo traje:', pj.trajes[pj.trajes.length - 1]);

//Con una constante
const x= 'vivo';
console.log('Vivo:', pj[x] );

//Nombre de una llave diferente
console.log('Ultima Pelicula:', pj["ultima-pelicula"]);

//Borrar un llave valor dentro de un objeto
delete pj.edad;

//Transformar un objeto en un "array" para saber el posicionamiento de los llave valor
const arrPj= Object.entries(pj);
console.log(arrPj);
console.log(arrPj[0]); //Sale como un array que tiene 2 posiciones, 0 = nombre, 1= Tony Stark
console.log(arrPj[0][0]);

//Agregar un nuevo llave valor
pj.casado = 'Hola';
console.log(pj);

//Convertir el objeto para que no pueda cambiar sus valores o agregar nuevos
//Tocaria hacer el mismo procedimiento con los objetos dentro del objeto
Object.freeze(pj);
pj.residente = 'ALV';
console.log(pj);

//Transformar el objeto en un arreglo pero solo saber el nombre de las llaves
const llave = Object.getOwnPropertyNames(pj)
console.log(llave);

//Transformar el objeto en un arreglo pero solo saber el contenid de los valores llaves
const valor = Object.values(pj);
console.log(valor);





