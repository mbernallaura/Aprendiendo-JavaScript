class Rectangulo{
    //propiedades privadas, no existen metodos privados
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base*altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
//No se puede hacer una modificacion a ese propiedad porque es privada
// rectangulo.#area = 100;
console.log(rectangulo);