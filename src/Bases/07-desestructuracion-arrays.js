// desestructuración de arreglos
const personajes = ['Goku','Trunks','Bulma'];
// console.log(personajes[0])

const[, ,p3] = personajes;
// const[p1] = personajes;

console.log(p3)


const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

// tarea 
// 1.- el primer valor del arr se llamará nombre
// 2.- se llamará setNombre

const usesState  = (valor)=>{
    return [valor, ()=>{console.log('Hola mundo')}];
}

// const arr = usesState('Lucas');
const[nombre,setNombre] = usesState('Lucas');
console.log(nombre)
setNombre();