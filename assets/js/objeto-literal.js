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

