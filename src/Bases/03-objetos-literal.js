const persona = {
    nombre: 'Antonia',
    apellido: 'Dzul',
    edad:25,
    direccion:{
        ciudad:'Chetumal',
        cp:'77000',
        lat:14.9865,
        lot:12.112445
    }
};
// console.table(persona)

const persona2 = {...persona};
persona2.nombre = 'Lucas';

console.log(persona)
console.log(persona2)
