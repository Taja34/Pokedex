import { getDataUnique, getInfo } from "./scripts/process.js";
import { printPokemons, printPokemon } from "./scripts/ui.js";
const imagenes = ["./img/bulbasor.png","https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png","https://www.pngmart.com/files/13/Charmander-PNG-HD.png","https://i.pinimg.com/originals/37/83/b4/3783b47987aef2a15c1b24a10a8b434c.png","https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png","./img/kisspng-sea-turtle-pokmon-x-and-y-squirtle-pokmon-go-image-gallery-shiny-squirtle-5bd39f694d93b4.6230156815405955613178.png","./img/pngwing.com (2).png"];


let pokemonInicio = 1;
let dataFinal = [];

const mainFunction = async () => {
    let data = await getInfo();
    let responseInfo = [];
    data.forEach(element => {
        let infoPokemons = getDataUnique(element.url);
        responseInfo.push(infoPokemons)
    });

    const newResponse = await Promise.all(responseInfo);

    data.forEach((_, index) => {
        data[index].info = newResponse[index];
        data[index].image = imagenes[index];
        
        
    })
    dataFinal =  data
    console.log(dataFinal)
  
    printPokemons(dataFinal);
}
 

mainFunction();
document.addEventListener('click', ({ target }) => {
    if(target.classList.contains("a1") ||target.classList.contains("img_bulbasor")){
        console.log(target.id)
pokemonInicio = target.id;
console.log(dataFinal)
let found = dataFinal.find(element => element.info.id == pokemonInicio);
    console.log(found)
    printPokemon(found)
    }

})