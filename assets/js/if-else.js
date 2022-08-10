let a = 5;

//Excepeciones undefined, null, una asignacion
if(a >= 10){
    console.log(a + ' es mayor a 10');
}else{
    console.log(a + ' es menor a 10');
}

const hoy = new Date();
let dia = hoy.getDay() //0: Domindo, 1: lunes, 2: martes...
console.log({dia});

//un = es una asignacion
//doble == confirmar si el valor en este caso es 1 pero no me importa de que tipo de dato sea
//triple === confirmar el valor teniendo en cuenta el tipo de dato
if(dia === 0){
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');
}else if(dia === 2){
    console.log('Martes');
}

//Sin usar If Else o switch, unicamente objetos
dia = 3;
const diaSemana = {
    0 : 'domingo',
    1 : 'lunes',
    2 : 'martes',
    3 : 'miercoles',
    4 : 'jueves',
    5 : 'viernes',
    6 : 'sabado'
}
//el operador || es para preguntar si la primera condicion no es null o undefind
console.log(diaSemana[dia] || 'Dia no definido');

const diaSemana2 = {
    0 : ()=>'domingo - 0',
    1 : ()=>'lunes - 1',
    2 : ()=>'martes - 2',
    3 : ()=>'miercoles - 3',
    4 : ()=>'jueves - 4',
    5 : ()=>'viernes - 5',
    6 : ()=>'sabado - 6'
}
console.log(diaSemana2[dia]() || 'Dia no definido');

//Arreglo
const diaSemana3 = [
    'domingo',
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado'
];
console.log(diaSemana3[dia] || 'Dia no definido');
