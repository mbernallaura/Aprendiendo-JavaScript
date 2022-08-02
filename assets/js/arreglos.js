const arr = new Array(10); // Poco comun esta inicializacion 
const arr2 = [] //Inicializacion comun

let videoJuegos = ['Mario', 'Megaman', 'Contra'];
console.log({videoJuegos});

let arrCosas = [
    true,
    123,
    'algo',
    1 + 2, //Hace primero la operacion antes de entrar en el arreglo
    function(){}, //Funcion
    ()=>{},       //Funcion flecha
    {a: 1},       //Objeto
    ['Spiderman', 'Superman', 'Aquaman',[
        'Dc octopus',
        'Joker',
        'Tanos'
        ],
    ], 
];
console.log({arrCosas});

//Retornar en consola Aquaman
/*let arrSuperHeroes = [];
arrSuperHeroes = arrCosas[7];
console.log(arrSuperHeroes[2]);*/

//Manera Resumida:
console.log(arrCosas[7][2]);

//Retornar en consola Tanos
console.log(arrCosas[7][3][2]);


