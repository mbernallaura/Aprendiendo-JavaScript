//Nota: Las funciones que no tienen return explicito, es como si tuviera UNDEFINED por defecto
//Esta tipo de clases se usaban en navegadores de hace 7 años, y se especificaba 
//que tocaba crear una instancia con la palabra new
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}
 
const maria = new Persona('Maria', 18);
const melisa = new Persona('Melisa', 15);
console.log(maria);
maria.imprimir();
