const saludar = function(nombre){
    return `Hola ${nombre}`
}

const saludar2 = (nombre)=>{
    return `Hola ${nombre}`
}
const saludarSimplificado = (nombre)=>`Hola ${nombre}`;
// console.log(saludar('Lucas'));
console.log(saludar2('Lucas'));
console.log(saludarSimplificado('Lucas'));


const getUser = ()=>({    
        uuid:'ABC123',
        username:'reactjs'
    
})
const user = getUser;
 console.log(user())

// Tarea
// 1.- transformar en función de flecha
// 2.- tiene que retornar un objeto implicito
// 3.- pruebas

//  function getUsuarioActivo(nombre){
//      return {
//          uuid:'abc123',
//          username:nombre
//      }
//  }

const  getUsuarioActivo = (nombre)=>({
        uuid:'abc123',
        username:nombre
});

 const usuarioActivo = getUsuarioActivo('cruz');
 console.log(usuarioActivo)