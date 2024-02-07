
apiPokemon = {}

function converterPokemonDetalhadosToObjJson(pokemonDetalhes){

    const pokemon = new Pokemon()
    
    pokemon.name = pokemonDetalhes.name
    const tipos = pokemonDetalhes.types.map((tipo)=> tipo.type.name)
    const [tipo] = tipos
    pokemon.types = tipos
    pokemon.type = tipo
    pokemon.photo = pokemonDetalhes.sprites.other.dream_world.front_default

    return pokemon
}

apiPokemon.getDetalhesPokemon = (arrayPokemon) => {

    return fetch(arrayPokemon.url)
    .then((response) => response.json())
    .then((converterPokemonDetalhadosToObjJson))
}

apiPokemon.getPokemon = (offset=0, limit=1) => {

    const url= `https://pokeapi.co/api/v2/pokemon?offest=${offset}&limit=${limit}`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((objtJson) => objtJson.results)
    .then((arrayPokemon) => arrayPokemon.map(apiPokemon.getDetalhesPokemon))
    .then((reqPokemon) => Promise.all(reqPokemon))
    .then((pokemonDetails) => pokemonDetails)
}