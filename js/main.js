


function convertpokemonJsonToHtml(objPokemon){
    return `<section class="pokedex-grid">
    <header class="item-um-cabecalho">
       <img src="${objPokemon.sprites.other.dream_world.front_default}" alt="">
    </header>
    <section class="item-dois-tipos" >
       <h2>${objPokemon.name}</h2>
       <ol class="tipos">
           <li class="tipo">Grass</li>
           <li class="tipo">Poison</li>
       </ol>
    </section>
    <section class="item-tres">
       <p class="parafgrafo">
           Bulbasaur é um Pokémon bonito nascido com uma grande semente solidamente fixado à sua volta, a semente cresce em tamanho com o Pokémon.
       </p>
    </section>
   <section class="item-quatro">
       <h2>Fraqueza</h2>
       <ol>
           <li class="fire">fire</li>
           <li class="ice">ice</li>
           <li class="psychic">psychic</li>
           <li class="flying">flying</li>
       </ol>
   </section>
   <section class="item-cinco">
      <h2>Evolução</h2>
      <ol>
       <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt=""></li>
       <section class="seta">&#10230;</section>
       <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg" alt=""></li>
       <section class="seta">&#10230;</section>
       <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg" alt=""></li>
      </ol>
   </section>
</section>`
}

const pokHtml = document.getElementById('pok')

apiPokemon.getPokemon().then((pokemon) => {
        const listaHtml = pokemon.map(convertpokemonJsonToHtml)
        const conf = listaHtml.join('')
        pokHtml.innerHTML += conf;
    })