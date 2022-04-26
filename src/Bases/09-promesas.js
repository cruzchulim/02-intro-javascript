import {getHeroeById,getHeroesByOwner} from './Bases/08-imp-exp';
// const promesa = new Promise ((resolve,reject)=>{
//    setTimeout( ()=>{       
//        const heroe = getHeroeById(2);
//     //    console.log(heroe)
//     //    console.log('2 segundos despues')
//     resolve(heroe);
//     // reject('No se pudo encontra el heroe');
//    },2000);
// })
// promesa.then( (heroe)=>{
//     console.log(heroe)
// })
// .catch( err=>console.warn(err))


const getHeroeByIdAsync = (id) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout( ()=>{       
            const heroe = getHeroeById(id);            
         //    console.log('2 segundos despues')
         if(heroe){
            resolve(heroe);
         }else{
            reject('no existe el Heroe')
            
         }
         
         // reject('No se pudo encontra el heroe');
        },2000);
     })     
}

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn)