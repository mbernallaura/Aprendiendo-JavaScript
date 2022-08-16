const dia = 0; //0: Domingo, 1:lunes
//Switch evalua como un triple igual en cada uno de los casos es decir en este caso
//si colocamos '0', no entraria porque el tipo de variable que se evalua es un number y no un string
switch (dia) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;

    default:
        console.log('No es lunes, martes ni domingo');
        break;
}