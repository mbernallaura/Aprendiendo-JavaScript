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

class Heroe extends Persona{
    clan = 'sin clan';

    constructor(nombre, codigo, frase){
        //super(): hace referencia a la clase padre, en este caso es persona
        //Para poder usar el this y utilizar algun atributo de la clase en este caso Heroe, se debe poner despues del super,
        //ya que hace referencia primero al constructor del padre que este fue de donde se extendio
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${this.codigo} de ${this.clan}`);
        super.quienSoy();;
    }
}

const peter = new Heroe('Peter Parker', 'Spiderman', 'No digas mmdas meriyein');
// const peter = new Heroe();
// console.log(peter);
peter.quienSoy();