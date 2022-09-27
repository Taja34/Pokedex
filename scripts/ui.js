const containerPokemons = document.getElementById('containerPokemons');
const contenedorPokemonPricipal = document.getElementById('contenedorPokemonPricipal')
export const printPokemons = async (pokemons) => {

    containerPokemons.innerHTML = '';
    pokemons.forEach((pokemon) => {

        containerPokemons.innerHTML += `
        <div class="a1" id=${pokemon.info.id}><figure class="bulbasor"><img src=${pokemon.info.sprites.other['official-artwork'].front_default} alt="bulbasor" class="img_bulbasor" id="${pokemon.info.id}"></figure> </div>
        `
    });
}
let tipo = '';
export const printPokemon = async (pokemon) => {
    console.log(pokemon)
    if(pokemon.types[0].type.name == "grass"){
        tipo = "🌱"
    }else if(pokemon.types[0].type.name == "fire"){
        tipo = "🔥"
    }else if(pokemon.types[0].type.name == "normal"){
        tipo = "⏺"
    }else if(pokemon.types[0].type.name == "water"){
        tipo = "💧"
    }else if(pokemon.types[0].type.name == "bug"){
        tipo = "🐛"
    }else if(pokemon.types[0].type.name == "electric"){
        tipo = "🌩"
    }
    
    contenedorPokemonPricipal.innerHTML = '';
    contenedorPokemonPricipal.innerHTML += `
    <aside class="charizard">
    <article class="pan1">
        <div class="iconoDelNombre">${tipo}</div>

<h1 class="Nombre"> <b> ${pokemon.name} </b></h1>
</article>
<article class="pan2">
<figure class="img_charizard">
    <img src=${pokemon.sprites.other['official-artwork'].front_default} class="a1_imgcharizard">
</figure>
</article>
</aside>
<section class="estadisticas">
            <br>
            <table class="coso">
                <tr>
                    <th>NO</th>
                    <th>levels</th>
                </tr>
                <tr>
                    <td>${pokemon.game_indices[0].game_index}</td>
                    <td>100</td>
                </tr>
            </table>
            <br>
            <br>
            <br>
            <br>

            <table class="coso3">
                <tr>
                    <th>TYPE</th>
                    <th>HABILITY</th>
                </tr>
                <tr>
                    <td>${pokemon.types[0].type.name}</td>
                    <td>${pokemon.abilities[0].ability.name}</td>
                
                </tr>
            </table>
            <br>
            <br>
            <br>
            <br>
            <table class="coso2">
                <tr>
                    <th >HEIGHT</th>
                    <th>WEIGHT</th>
                </tr>
                <tr>
                    <td>${pokemon.height}</td>
                    <td>${pokemon.weight}</td>
                </tr>
            </table>



        </section>
        `
        ;
}