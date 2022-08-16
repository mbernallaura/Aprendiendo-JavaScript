const regresaTrue =()=>{
    console.log('Regresa true');
    return true;
}

const regresaFalse =()=>{
    console.log('Regresa false');
    return false;
}

//Booleanos
console.warn('Not o la negacion');
console.log(true);   //true
console.log(!true);  //false
console.log(!false); //true

console.log(!regresaFalse());

//Operador and 
//Si todas las condiciones son true, va a regresar un true
console.log('Operador And');
console.log(true && true); //true
console.log(true && false);//false
console.log(true && !false);//true

//Si la primera condicion de la comparacion regresa un false, JS ya da por centado que la respuesta es un false
//No mira las demas condiciones
console.warn('Ejemplo primer condicon false');
console.log(regresaFalse() && regresaTrue());
console.warn('Cuando la primer condicion es true');
console.log(regresaTrue() && regresaFalse());
console.warn('Mirando resultado');
regresaFalse() && regresaTrue();
console.warn('4 condiciones');
console.log(true && true && true && false); //false

//Condicion or
//Regresa un true siempre y cuando alguna de las condiciones sea true
console.warn('Or');
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());
console.warn('4 condiciones');
console.log(true || true || true || false); //true

//Asignaciones
console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

//Caso de operador and (&&)
//Si la primera condicion es true, la asignacion que se le dara a la constante sera la de la ultima condicion
//si al continuar las condiciones en orden y una retorna false, entonces ya no evaluara las demas condiciones siguientes
//y quedara con la asignacion de false
const a1 = true && 'Hola mundo';
const a1_1 = true && 'Hola mundo' && 150;
const a1_2= true && false && 150;
console.log({a1, a1_1, a1_2});

//Caso operador or(||)
//Siguiendo el orden de las condiciones a evaluar si ecuenta una condicion true, quedara con ese valor y no evaluara las demas
//ya se que la siguiente condicion tammbien tenga un true 
const a2 = soyFalse || 'Ya no soy false';
const a3 = soyFalse || soyUndefined || soyNull || 'Ya no soy false';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy false' || true;
console.log({a2, a3, a4});
