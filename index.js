const pokemon_container = document.querySelector('.poke-container')

function pokemon (id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then ((data) => {
        createPokemon(data);
    })
}
function Pokemons(number){
    for (let i=1; i<=number; i++){
        pokemon(i);
    }
}
    
function createPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("pokemonBlock");

    const spriteContainer= document.createElement("div");
    spriteContainer.classList.add("imgContainer");

    const sprite= document.createElement("img");
    sprite.src= pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number= document.createElement("p");
    number.classList.add("number");

    number.textContent= `#${pokemon.id.toString().padStart(3, 0)}`;

    const name= document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;
    
    const pokemonType= pokemon.types[0].type.name
    const type = document.createElement("p");
    type.classList.add("type");
    type.textContent = `type:${pokemonType}`;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(type);


    pokemon_container.appendChild(card)
}

Pokemons(20)