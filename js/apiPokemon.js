
apiPokemon = {}

apiPokemon.getDetalhesPokemon = (arrayPokemon) => {

    return fetch(arrayPokemon.url)
    .then((response) => response.json())
    .then((pokemonDetalhados) => pokemonDetalhados)
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