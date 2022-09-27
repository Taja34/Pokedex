const btn = document.getElementById('btn')
const inputDelPokemon = document.getElementById('inputDelPokemon')
export const getInfo = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const { data: { results } } = await axios.get(URL);
    return results;
}
export const getInfoIndividual = async (url) => {
    const URL2 = url;
    const { data } = await axios.get(URL2);
    return data;
}
export const getDataUnique = async (url) => {
    const {data} = await axios.get(url)
    return data;
}
