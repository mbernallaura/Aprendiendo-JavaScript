class Singleton{
    static instancia;
    nombre = '';
    constructor(nombre){
        // const a = undefined;
        // console.log(a); //Respuesta a = undefined
        // console.log(!a); //Respuesta a = true
        // console.log(!!a); //Respuesta a = false
        console.warn(Singleton.instancia);

        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');
console.log(`Nombre en la instancia es: ${instancia1.nombre}`);
const instancia2 = new Singleton('Spiderman');
console.log(`Nombre en la instancia es: ${instancia2.nombre}`);