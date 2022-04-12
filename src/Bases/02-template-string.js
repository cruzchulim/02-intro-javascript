const nombre = 'Cruz';
const apellido = 'Chulim';
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola '+nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)