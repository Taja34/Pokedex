import { getDataUnique, getInfo,getInfoIndividual  } from "./scripts/process.js";
import { printPokemons, printPokemon } from "./scripts/ui.js";

const url = 'https://pokeapi.co/api/v2/pokemon/'
const btn = document.getElementById('btn')
const inputDelPokemon = document.getElementById('inputDelPokemon')
let pokemonInicio = 1;
let datafiltrada = [];
let data =[];

const mainFunction = async () => {
     data = await getInfo();
    let responseInfo = [];
    data.forEach(element => {
        let infoPokemons = getDataUnique(element.url);
        responseInfo.push(infoPokemons)
    });

    const newResponse = await Promise.all(responseInfo);

    data.forEach((_, index) => {
        data[index].info = newResponse[index];
        
        
        
    })
  datafiltrada=[];
  data.forEach((element) => {
    if(datafiltrada.length < 4){
  datafiltrada.push(element)}
});
console.log(data)
    printPokemons(datafiltrada);
    
}
 

mainFunction();
document.addEventListener('click',async ({ target }) => {
    if(target.classList.contains("a1") ||target.classList.contains("img_bulbasor")){
        console.log(target.id)
pokemonInicio = target.id;

console.log(datafiltrada)
let found = datafiltrada.find(element => element.info.id == pokemonInicio);
    console.log(found)
    let das2 = found.url;
    console.log(das2)
   let das3 = await getInfoIndividual(das2)
   printPokemon(das3)
    
    }

})

document.addEventListener('click', async({ target }) => {
    if(target.classList.contains("btn")){
        let value = inputDelPokemon.value;
        console.log(datafiltrada)
            console.log(data)
                let resultado = `${url}${value}`;
                console.log(resultado)
                let pokemonaPintar = await getInfoIndividual(resultado)
                console.log(pokemonaPintar)
                printPokemon(pokemonaPintar)
                inputDelPokemon.value ='';
            }
        
    }
)