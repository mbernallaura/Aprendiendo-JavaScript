//Definicion metodo: Es una funcion que se encuentra dentro de un objeto
//CUANDO UNA FUNCION NO TIENE UN RETURN explicito, esto por defecto RETORNA UNDEFINED
function saludar() {
    console.log('Hola mundo');
}

//Funcion anonima
const saludar2 = function () {
    console.log('Hola mundo2');
}

function saludarNombre( nombre )  {
    console.log('Hola ' + nombre);
}

//Funcion anonima con argumentos
const saludarNombre2 = function (nombre) {
    console.log('Hola ' + nombre);
}

saludar();
saludar2();
saludarNombre('Laura');
saludarNombre2('Aleja');

//Funcion flecha
const saludarFlecha = () =>{
    console.log('Hola flecha');
}
saludarFlecha();

const saludarFlecha2 = (nombre) =>{
    console.log('Hola ' + nombre);
}
saludarFlecha2('Flecha 2');

//Funciones poniendo return
function sumar(x, y) {
    return x + y;
}
console.log(sumar(4,2));

//Funcion flecha con return
const sumar2 = (x, y) =>{
    return x + y;
}
console.log(sumar2(6,8));

//Hacer la funcion flecha anterior, pero de forma corta
//SE PUEDE HACER ESTO PORQUE SOLO ESTA LA LINEA DEL RETURN, NO FUNCIONA SI HUBIERAS MAS LINEAS DE CODIGO
const sumar2_1 = (x, y) => x + y;
console.log(sumar2_1(4,4));

function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

//Transformando la anterior funcion en funcion de flecha
const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());