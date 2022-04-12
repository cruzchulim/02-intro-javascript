// desestructuración de objetos
// asignación desestructurante

const mascota = { nombre: "Lucas", tipo: "perro", edad: 1 };

// const {edad,tipo,nombre} = mascota;

// console.log(nombre)
// console.log(tipo)
// console.log(edad)

const Context = ({nombre,edad,tipo,raza='Mestizo'})=>{
    // const {edad,tipo,nombre} = mascota;
    // console.log(edad,nombre,tipo)
    // console.log(nombre,tipo,edad,raza)
    return {
        nombreMascota:nombre,
        anios:edad,
        ubicacion:{
            lat:14.12452,
            lng:-30.12454
        }
    }
};

const {nombreMascota,anios,ubicacion:{lat,lng}} = Context(mascota);
console.log(nombreMascota,anios);
console.log(lat,lng)