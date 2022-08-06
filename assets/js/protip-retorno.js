function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido
    }
}
console.log(crearPersona('Laura', 'Bernal')); 

//Transformar funcion anterior a funcion de flecha
//Se coloca en parentesis para que JS detecte que se quiere devolver 
//en forma de un objeto y no el cuerpo de la funcion 
const crarPersona2= ( nombre , apellido ) => ({nombre, apellido});
console.log(crarPersona2('Juliana', 'Mala'));

//Las funciones tienen "arguments" en los parametros y sirve si el usuario a la hora de llamar la
//funcion y mandar varios parametros mas de los que se tenian descritos, pues se guardan en esa variable
function imprimirArgumentos() {
    console.log(arguments);
}

imprimirArgumentos(10, 111, 'Hola');

//Si se quiere hacer lo anterior pero con una funcion de flecha
//...nombreCualquiera es un parametro rest, que hace la misma funcion que "arguments" en una funcion
//si se tienen parametros predeterminados tiene que ser ANTES DEL parametro rest
const imprimirArgumentos2= (edad,...args) =>{
    console.log({edad,args});
}
imprimirArgumentos2(10, true, 'Hola2', 'Probado');

//Si se quiere guardar estos args se puede hacer de esta manera
//Para guardar los args hay que recordar que el primer parametro es de la edad y luego si van los del arg en este cas
const imprimirArgumentos3= (edad,...args) => args;
const [vivo, saludo, nombre]= imprimirArgumentos3(10, true, 'Hola', 'Julia');
console.log({vivo, saludo, nombre});

//Si la funcion esta retornando un objeto y necesitamos un llave valor en especifico se puede asi:
//Hacemos uso de la primera funcion creada crearPersona()
const {apellido} = crearPersona( 'Josefina' , 'Rincon' );
console.log({apellido});

//Si queremos cambiarle el nombre a la llave valor que se ha capturado anteriormente se hace:
const {apellido : nuevoApellido} = crearPersona( 'Josefina' , 'Rincon' );
console.log({nuevoApellido});

