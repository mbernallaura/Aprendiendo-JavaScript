class Persona{
    static _conteo = 0;
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    //Se puede asignar valores por defecto a los atributos desde el contructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
        Persona._conteo++;
    }

    //Staticos: sirven para utilizarlo en caso de que no se qiera crear alguna instancia
    //Tambien se trabajan con la estructura y las propiedas de los metodos staticos
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    //No hay instancias y por ende no se puede lllamar atributos de la clase que no sean estaticos
    static mensaje(){
        console.log('Soy un metodo estatico');
    }

    //Set: estabecer un valor
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    //get: Obtener valor
    get getComidaFavorita(){
        return `La commida favorita de ${this.codigo} es ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        //Se puede llamar los metos dentro de la misma clase de esta manera:
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const peter = new Persona('Peter Parker', 'Spiderman', 'No digas mmdas meriyein');
const tonny = new Persona();
// console.log(peter);
// console.log(tonny);
peter.miFrase();

peter.setComidaFavorita = 'El pie de cereza de la tia May';
console.log(peter.getComidaFavorita);
console.log('conteo '+ Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
