//Definicion metodo: Es una funcion que se encuentra dentro de un objeto
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