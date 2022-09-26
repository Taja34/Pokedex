import { getDataUnique, getInfo  } from "./scripts/process.js";
import { printPokemons, printPokemon } from "./scripts/ui.js";


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
document.addEventListener('click', ({ target }) => {
    if(target.classList.contains("a1") ||target.classList.contains("img_bulbasor")){
        console.log(target.id)
pokemonInicio = target.id;
console.log(datafiltrada)
let found = datafiltrada.find(element => element.info.id == pokemonInicio);
    console.log(found)
    printPokemon(found)
    }

})

document.addEventListener('click', ({ target }) => {
    if(target.classList.contains("btn")){
        let value = inputDelPokemon.value;
        console.log(datafiltrada)
            console.log(data)
                let resultado = data.find(element => element.name == value );
                console.log(resultado)
                printPokemon(resultado)
                inputDelPokemon.value ='';
            }
        
    }
)