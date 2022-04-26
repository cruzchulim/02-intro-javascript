// importar archivos
// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';

import { heroes } from './data/heroes';

// console.log(heroes)

// código rudimentario, pero con demasiado
// const getHeroeById = (id)=>{
//     return heroes.find((heroe) => {
//         if (heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }


//  const getHeroeById = (id)=>{
//      return heroes.find((heroe) => heroe.id === id);
//  }

//simplificar aún más
 const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

 console.log(getHeroeById(2));

 const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
 console.log(getHeroesByOwner('DC'))