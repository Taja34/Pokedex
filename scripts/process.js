const btn = document.getElementById('btn')
const inputDelPokemon = document.getElementById('inputDelPokemon')
export const getInfo = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0.';
    const { data: { results } } = await axios.get(URL);
    return results;
}
export const getDataUnique = async (url) => {
    const {data} = await axios.get(url)
    return data;
}
